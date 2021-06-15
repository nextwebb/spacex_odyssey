const fs = require("fs");
const Wallet = require("./wallet");
const wallet = new Wallet();

class Trip {
  setTrip = (data) => {
    let { spaceCraft, origin, destination } = data;

    // convert to lower case
    spaceCraft = spaceCraft.toLowerCase();
    let originOrbit = origin.orbit.toLowerCase();
    let destinationType = destination.type.toLowerCase();
    let destinationOrbit = destination.orbit.toLowerCase();

    // get wallet details from json file
    let walletDetails = wallet.getWallet();

    let newAmount;

    /*
     * check: if the destination type is natural, run calculateTrip function to check for other data points and resolve the trip
     * if the destination is man made, run calculateTrip function to check for other data points and resolve the trip
     * and then subtract 250 aditional fare from the result of calculateTrip function.
     */
    if (destinationType === "natural") {
      newAmount = this.calculateTrip(
        originOrbit,
        destinationOrbit,
        spaceCraft,
        walletDetails.amount
      );
      if (newAmount >= 0) {
        fs.writeFileSync("wallet.json", JSON.stringify({ amount: newAmount }));
        return {
          error: false,
          code: 200,
          data: `trip from ${origin.station} to ${destination.station} Successful`,
        };
      } else {
        return {
          error: true,
          code: 500,
          data: "You do not have sufficient money in your wallet",
        };
      }
    } else {
      newAmount = this.calculateTrip(
        originOrbit,
        destinationOrbit,
        spaceCraft,
        walletDetails.amount
      );
      newAmount -= 250;
      if (newAmount >= 0) {
        fs.writeFileSync("wallet.json", JSON.stringify({ amount: newAmount }));
        return {
          error: false,
          code: 200,
          data: `trip from ${origin.station} to ${destination.station} Successful`,
        };
      } else {
        return {
          error: true,
          code: 500,
          data: "You do not have sufficient money in your wallet",
        };
      }
    }
  };

  calculateTrip = (
    originOrbit,
    destinationOrbit,
    spaceCraft,
    walletBalance
  ) => {
    let amount;
    if (originOrbit == destinationOrbit) {
      if (spaceCraft === "falcon 1") {
        amount = walletBalance - 50;
      } else if (spaceCraft === "falcon 9") {
        amount = walletBalance - 100;
      }
    } else {
      if (spaceCraft === "falcon 1") {
        amount = walletBalance - 250;
      } else if (spaceCraft === "falcon 9") {
        amount = walletBalance - 500;
      }
    }
    return amount;
  };
}

module.exports = Trip;