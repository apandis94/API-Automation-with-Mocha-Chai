const request = require("supertest");
const { expect } = require("chai");
const auth = require("../data/auth.json");
const addunit = require("../data/unit.json");

let token;
let UnitID;

describe("Regist User", () => {
  const response = request("https://kasir-api.belajarqa.com").post("/authentications").send(auth);
  it("Geth Auth", async () => {
    console.log((await response).status);
    console.log((await response).body);
    token = (await response).body.data.accessToken;
    console.log("-----------//------------");
    console.log("akses token adalah = " + token);
  });

  it("Add Unit", async () => {
    const response = request("https://kasir-api.belajarqa.com").post("/units").send(addunit).set("Authorization", `Bearer ${token}`);
    console.log("status adalah = " + (await response).status);
    console.log("Response Body = ");
    console.log((await response).body);
    expect((await response).status).to.equal(201);
    expect((await response).body.data.unitId).not.to.be.null;
    UnitID = (await response).body.data.unitId;
    console.log("-------------------------");
    console.log("Unit ID adalah = ");
    console.log(UnitID);
  });

  it("Unit Detail", async () => {
    const response = request("https://kasir-api.belajarqa.com").get(`/units/${UnitID}`).set("Authorization", `Bearer ${token}`);
    console.log("status adalah = " + (await response).status);
    console.log("Response Body = ");
    console.log((await response).body);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.unit.name).not.to.be.null;
    UnitName = (await response).body.data.unit.name;
    console.log("-------------------------");
    console.log("Nama Unit adalah = ");
    console.log(UnitName);
    expect(function (response) {
      assert(response.body.hasOwnProperty("status"));
      assert(response.body.hasOwnProperty("data"));
    });
    ex(function (err, res) {
      if (err) throw err;
    });
  });
});
