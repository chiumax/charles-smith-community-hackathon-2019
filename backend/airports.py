import requests
import re

def cleanhtml(raw_html):
  cleanr = re.compile('<.*?>')
  cleantext = re.sub(cleanr, '', raw_html)
  return cleantext
def airports(lat, long):
    s = requests.get("http://aviation-edge.com/api/public/nearby?key=8e5214&lat="+lat+"&lng="+long+"&distance=100").text
    print(s)
airports("39.144520","-77.411040")
