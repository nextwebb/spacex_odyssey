 
## This application uses the following technologies:
* nodeJs
* expressJs
* mocha
* chai

## How to run the application
Run **yarn** or **npm install** in your project root directory to generate the node module and install the necessary dependencies.

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

## Note: to run the test run **yarn test** or **npm test**
