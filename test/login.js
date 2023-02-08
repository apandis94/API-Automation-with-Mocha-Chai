const request = require("supertest");
const { expect } = require("chai");

var password = "SUKAJAYA10";
var email1 = "kelontong.murah@gmail.com";

// Request Body
var login = {
  name: "Kelontong Murah",
  email: email1,
  password: password,
};

var auth = {
  email: email1,
  password: password,
};

var user = {
  name: "Task 1 Sanber",
  email: "task1sanber@gmail.com",
  password: "SUKAJAYA10",
};

// Global var
let email;
let token;

describe("Regist Toko in Casier Aja", () => {
  const response = request("https://kasir-api.belajarqa.com").post("/registration").send(login);
  it("Find Status and Body", async () => {
    console.log((await response).status);
    console.log((await response).body);
    email = (await response).body.data.email;
    console.log("-----------//------------");
    console.log("email adalah = " + email);
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

describe("Get Auth", () => {
  const response = request("https://kasir-api.belajarqa.com").post("/authentications").send(auth);
  it("Find Status and Body", async () => {
    console.log((await response).status);
    console.log((await response).body);
    token = (await response).body.data.accessToken;
    console.log("-----------//------------");
    console.log("akses token adalah = " + token);
  });

  it("Equal Status must be 201", async () => {
    expect((await response).status).to.equal(201);
  });
});

describe("Regist User", () => {
  it("Find Status and Body", async () => {
    const response = request("https://kasir-api.belajarqa.com").post("/users").send(user).set("Authorization", `Bearer ${token}`);
    console.log((await response).status);
    console.log((await response).body);
  });

  it("Equal Status must be 201", async () => {
    expect((await response).status).to.equal(201);
  });
});
