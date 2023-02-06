const request = require("supertest");
const { expect } = require("chai");

describe("Get Request example", () => {
  const response = request("https://petstore.swagger.io/v2").get("/store/inventory");
  it("Find Pets by Status", async () => {
    console.log((await response).status);
    console.log((await response).body);
  });

  it("Equal Status must be 200", async () => {
    expect((await response).status).to.equal(200);
  });
});

describe("Post Request Example", () => {
  const response = request("https://petstore.swagger.io/v2").post("/user").send({
    id: 12345,
    username: "myskill",
    firstName: "myskill",
    lastName: "myskill",
    email: "myskill@mailsac.com",
    password: "myskill123",
    phone: "08123123",
    userStatus: 1,
  });
  it("Success create user", async () => {
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).body.message).to.equal("12345");
  });
});
