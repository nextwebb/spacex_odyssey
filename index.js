const express = require("express");
const tripRoutes = require('./src/modules/trip/tripRouter');
const walletRoutes = require('./src/modules/wallet/walletRouter');
const app = express();

const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use('/trips', tripRoutes);
app.use('/wallets', walletRoutes);

app.get("/", (req, res) => res.send("working"));

app.listen(port, () => console.log(`running on http://localhost:${port}`));