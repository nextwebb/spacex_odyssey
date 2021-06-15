const fs = require("fs");

class Wallet {
  // check for wallet amount from wallet.json file
  // and create wallet.json file with default wallet amount of 0 if no file was found
  getWallet = () => {
    let walletAmount;
    try {
      walletAmount = fs.readFileSync("wallet.json");
    } catch (e) {
      fs.writeFileSync("wallet.json", JSON.stringify({ amount: 0 }));
      walletAmount = fs.readFileSync("wallet.json");
    }
    return JSON.parse(walletAmount.toString());
  };

  // retrieve the amount from wallet.json file , add the amount from user to the existing amount found
  // and overrite the file with the latest amount.
  addWallet = (data) => {
    try {
      if (typeof data != "object") {
        return { error: true, code: 500, data: "please pass an object in post body" };
      }
      let { amount } = data;
      let walletAmount = this.getWallet();
      amount += walletAmount.amount;
      fs.writeFileSync("wallet.json", JSON.stringify({ amount }));
      return {
        error: false,
        code: 201,
        data: `Wallet Updated. current balance is ${amount} BTC`,
      };
    } catch (error) {
      return { error: true, code: 500, data: "error adding to wallet" };
    }
  };
}

module.exports = Wallet;