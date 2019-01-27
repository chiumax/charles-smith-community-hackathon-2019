from flask import Flask, request
from flask_cors import CORS
import latlong_utils
import public_transit
from back import airports
app = Flask(__name__)
CORS(app)
trips = dict()
@app.route("/", methods=["GET"])
def homepage():
    return home
@app.route("/book")
def book():
    return book
@app.route("/flights")
def list_airports():
    ret = {"dep":[],"arr":[]}
    d = request.args["lAd"] + ", "+request.args["lCi"]+request.args["lSt"]+request.args["lCo"]
    d_loc = latlong_utils.geocode(d)
    air = airports(d_loc["lat"], d_loc["lng"])
    l = air.getAirports()
    for i in l:
        ret["dep"].append({i[0]:i[1]})
    a = request.args["dAd"]+","+request.args["dCi"]+request.args["dSt"]+request.args["dCo"]
    a_loc = latlong_utils.geocode(a)
    air2 = airports(a_loc["lat"], a_loc["lng"])
    l = air2.getAirports()
    for i in l:
        ret["arr"].append({i[0]:i[1]})
    return ret
@app.route("/find_flights")
def find_flights():
    ret={}
    d = request.args["depart"]
    a = request.args["arrive"]
@app.route("/hotels")
def list_hotels():
    lat = request.args["lat"]
    long = request.args["long"]
