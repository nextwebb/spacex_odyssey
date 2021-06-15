const express = require("express");
const Wallet = require("../wallet/handler/wallet.handler");
const newWallet = new Wallet();
router = express.Router();

router.get("/", (req, res) => newWallet.getWallet(req, res));
router.post("/", (req, res) => newWallet.addWallet(req, res));

module.exports = router;