const trip = require("../../../services/trip");
const newTrip = new trip();

class Trip {
  setTrip = (req, res) => {
    let result = newTrip.setTrip(req.body);
    res.json(result);
  };
}

module.exports = Trip;