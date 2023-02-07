const request = require("supertest");
const { expect } = require("chai");

describe("Regist Toko in Casier Aja", () => {
  const response = request("https://kasir-api.belajarqa.com").post("/registration").send({
    name: "Kelontong Murah",
    email: "kelontong.murah@gmail.com",
    password: "SUKAJAYA10",
  });
  it("Find Status and Body", async () => {
    console.log((await response).status);
    console.log((await response).body);
  });

  it("Equal Status must be 201", async () => {
    expect((await response).status).to.equal(201);
  });

  it("Equal Massage must be Toko berhasil di daftarkan and get feedback", async () => {
    expect((await response).body.status).to.equal("success");
    expect((await response).body.message).to.equal("Toko berhasil didaftarkan");
    expect((await response).body.data.name).to.equal("Kelontong Murah");
  });
});
