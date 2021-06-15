const wallet = require("../../../services/wallet");
const newWallet = new wallet();

class Wallet {
  getWallet = async (req, res) => {
    let walletAmount = await newWallet.getWallet();
    res.json({ error: false, code: 200, data: walletAmount });
  };

  addWallet = async (req, res) => {
    let result = await newWallet.addWallet(req.body);
    res.json(result);
  };
}

module.exports = Wallet;