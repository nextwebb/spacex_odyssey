 
## SpaceX Odyssey
SpaceX runs a futuristic space travel system within our solar system with payments
done with bitcoin currency (BTC) wallet system. They have 2 rockets: Falcon 1 and
Falcon 9
You are required to model the following fare wallet system. At the end of the test, you
should be able to demonstrate a user loading a wallet with 3000BTC, and taking the
following trips, and then viewing the balance.
- Taking the Falcon 9 from Abuja station to the Moon
- Taking the Falcon 1 from the Moon to Spock station on Mars
- Taking the Falcon 9 from Mars to the International Space Station (ISS) in Lower Earth.
The Falcon 9 is a luxury spacecraft with better experience. Its passengers pay twice the fare of
the Falcon 1.

## This application uses the following technologies:
* nodeJs
* expressJs
* mocha
* chai

## How to run the application
Run 
```yarn``` or ```npm install``` in your project root directory to generate the node module and install the necessary dependencies.

You then run **yarn start** or **npm start** to run the app. Once the app is running you can test the endpoint on postman using this url http://localhost:3000 .

### These are the endpoints to call:
* http://localhost:3000/wallets (GET) : this endpoint is used to retireve the wallet balance.
* http://localhost:3000/wallets (POST): this endpoint is used to add money to the users wallet.
~~~
sample payload:
{
	"amount": 3000
}
~~~
* http://localhost:3000/trips (POST) : this endpoint is used to set the trips for the user
~~~
sample payload:
{
	"spaceCraft": "Falcon 1",
	"origin": {
		"station": "Abuja",
		"type": "Natural",
		"orbit": "Earth"
	},
	"destination": {
		"station": "Moon",
		"type": "Natural",
		"orbit": "mars"
	}
}
~~~

## To run the test run ```yarn test``` or ```npm test```
