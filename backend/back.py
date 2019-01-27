from amadeus import Client, ResponseError

amadeus = Client(
    client_id='B7bSWGLDln7x3UgptXrVjy0CzXj23p38',
    client_secret='36qDyPjxaRxKUn6m'
)

class planes:
    def __init__(self, origin,destination,date):
        #origin and destination are 3 letters
        #departure date is yyyy-mm-dd
        self.origin=origin
        self.destination=destination
        self.date=date
        
    def getPlanes(self):
        #returns price, class, departure1, arrival 1, derpature2(if applicable), and arrival2
        try:
            response = amadeus.shopping.flight_offers.get(origin=self.origin, destination=self.destination, departureDate=self.date).data
            final=[]
            for i in range(len(response)):
                for n in response[i]['offerItems']:
                    flight=[float(n['price']['total']),n['services'][0]['segments'][0]['pricingDetailPerAdult']['travelClass'],n['services'][0]['segments'][0]['flightSegment']['departure'],n['services'][0]['segments'][0]['flightSegment']['arrival']]
                    try:
                        flight.append(n['services'][0]['segments'][1]['flightSegment']['departure'])
                        flight.append(n['services'][0]['segments'][1]['flightSegment']['arrival'])
                    except:pass
                    final.append(flight)
            return final
        except ResponseError as error:
            print(error)

    def getPlanesSorted(self):
        a=self.getPlanes()
        a.sort(key=lambda x: x[0])
        return a

class hotels:
    def __init__(self,dest):
        #takes city name(3 letters)
        self.dest=dest

    def getHotels(self):
        #returns price, name, currency, longitude, lat, and hotel description
        new=[]
        for i in amadeus.shopping.hotel_offers.get(cityCode = self.dest).data:
            new.append([float(i['offers'][0]['price']['total']),i['offers'][0]['price']['currency'],i['hotel']['name'],i['hotel']['longitude'],i['hotel']['latitude'],i['offers'][0]['room']['description']])
        return new

    def getHotelsSorted(self):
        a=self.getHotels()
        a.sort(key=lambda x: x[0])
        return a
'''
hotel=hotels('TLV')
for i in hotel.getHotelsSorted():
    print(i)

planes=planes('IAD','TLV','2019-01-27')
for i in planes.getPlanesSorted():
    print(i)
'''



