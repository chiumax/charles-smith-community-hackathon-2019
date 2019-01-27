import requests, json
def geocode(address):
    query = address.replace(" ","+").replace(",","%2c")
    r = requests.get("https://api.geocod.io/v1.3/geocode?q="+query+"&api_key=1cc5b484c65b001c64e5cee6955bb5c118cc04c").text
    d = json.loads(r)
    return d["results"][0]["location"]
def reverse_geocode(lat, lng):
    query = str(lat)+","+str(lng)
    r = requests.get("https://api.geocod.io/v1.3/reverse?q="+query+"&api_key=1cc5b484c65b001c64e5cee6955bb5c118cc04c").text
    d = json.loads(r)
    return d["results"][0]["formatted_address"]
