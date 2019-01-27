import requests, json, datetime
import latlong_utils
def discover_stations(lat, long):
    s = "https://transit.api.here.com/v3/stations/by_geocoord.json?center="+lat+"%2C"+long+"&radius=350&app_id=toID8RwvgRfo7HrGumso&app_code=QLnSK7a7xQGds7tVZ-K8Og&max=3"
    t = requests.get(s).text
    d = json.loads(t)
    return d["Res"]["Stations"]["Stn"]
def directions(lat1,long1,lat2,long2,time = datetime.datetime.now()):
    ts = str(time).split(".")[0].replace(" ","T").replace(":","%3A")
    s = "https://transit.api.here.com/v3/route.json?app_id=toID8RwvgRfo7HrGumso&app_code=QLnSK7a7xQGds7tVZ-K8Og&routing=all&dep="+lat1+","+long1+"&arr="+lat2+","+long2+"&time="+ts
    t = requests.get(s).text
    d = json.loads(t)
    paths = []
    ret = []
    for i in d["Res"]["Connections"]['Connection'][0]["Sections"]["Sec"]:
        dep = i["Dep"]
        arr = i["Arr"]
        dep_name = ""
        if "Stn" in dep.keys():
            dep_name = dep["Stn"]["name"]
        else:
            dep_name = latlong_utils.reverse_geocode(dep["Addr"]["y"],dep["Addr"]["x"]).split(",")[0]
        arr_name = ""
        if "Stn" in arr.keys():
            arr_name = arr["Stn"]["name"]
        else:
            arr_name = latlong_utils.reverse_geocode(arr["Addr"]["y"],arr["Addr"]["x"]).split(",")[0]
        paths.append([[dep["time"].split("T")[1][:-3], dep_name, dep["Transport"]["mode"]], [arr["time"].split("T")[1][:-3], arr_name]])
    for p in paths:
                if p[0][-1]==20:
                    ret.append("At "+p[0][0]+", walk from "+p[0][1]+" to "+p[1][1]+".")
                elif p[0][-1]==5:
                    ret.append("At "+p[0][0]+", take the bus from "+p[0][1]+" to "+p[1][1]+".")
                elif p[0][-1]==3 or p[0][-1]==7:
                    ret.append("At "+p[0][0]+", take the train from "+p[0][1]+" to "+p[1][1]+".")
    return ret
