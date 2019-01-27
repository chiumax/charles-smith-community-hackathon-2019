from flask import Flask, request
import react
import latlong_utils
import public_transit
import back as *
app = Flask(__name__)
trips = dict()
@app.route("/", methods=["GET"])
def homepage():
    return home
@app.route("/book")
def book():
    return book
@app.route("/flights")
def list_flights():
    ret = {"dep":[],"arr":[]}
    d = request.args["lAd"] + ", "+request.args["lCi"]+request.args["lSt"]+request.args["lCo"]
    d_loc = latlong_utils.geocode(d)
    air = airport(d_loc["lat"], d_loc["lng"])
    l = air.getAirports()
    for i in l:
        ret["dep"].append({i[0]:i[1]})
    a = request.args["dCi"]+request.args["dSt"]+request.args["dCo"]
    a_loc = latlong_utils.geocode(a)
    air2 = airport(a_loc["lat"], a_loc["lng"])
    l = air2.getAirports()
    for i in l:
        ret["arr"].append({i[0]:i[1]})
    return ret


@app.route("/hotels/<location>/<id>")
def list_hotels(location):
    lat, long = location.split(",")
@app.route("/summary/<id>")
def summary(id):
    t = trips[id]
