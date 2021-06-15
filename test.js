const Wallet = require("./services/wallets");
const Trip = require("./services/trips");
const wallet = new Wallet();
const trip = new Trip();
const expect = require("chai").expect;

describe("Studio 14 assessment test cases", () => {
  describe("Wallet Services test", () => {
    context("get wallet balance", () => {
      it("should return an object with key: amount", () => {
        expect(wallet.getWallet()).to.be.an("object").and.haveOwnProperty("amount");
      });

      it("should return wallet amount of zero or greater than zero", () => {
        expect(wallet.getWallet().amount).to.gte(0);
      });
    });

    context("add wallet amount", () => {
      it("should not return an error", () => {
        expect(wallet.addWallet({ amount: 3000 }).error).to.equals(false);
      });
      it("should return an error if there is no parameter passed", () => {
        expect(wallet.addWallet().error).to.equals(true);
      });
      it("should return an error if parameter passed is not an object", () => {
        expect(wallet.addWallet(3000).data).to.equals(
          "please pass an object in post body"
        );
      });
    });
  });
  describe("Trip Services test", () => {
    let data, destinationOrbit, originOrbit, spaceCraft;

    beforeEach(() => {
      data = {
        spaceCraft: "Falcon 9",
        origin: {
          station: "Abuja",
          type: "Natural",
          orbit: "Earth",
        },
        destination: {
          station: "Moon",
          type: "Natural",
          orbit: "Earth",
        },
      };

      spaceCraft = data.spaceCraft.toLowerCase();
      originOrbit = data.origin.orbit.toLowerCase();
      destinationOrbit = data.destination.orbit.toLowerCase();
    });

    context("set trip details", () => {
      it("should return an object", () => {
        expect(trip.setTrip(data))
          .to.be.an("object")
          .key("error", "data", "code");
      });

      it("should return a digit", () => {
        expect(
          trip.calculateTrip(originOrbit, destinationOrbit, spaceCraft, 200)
        ).to.match(new RegExp("[0-9]", "g"));
      });
    });
  });
});