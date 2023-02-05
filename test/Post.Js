const request = require("supertest");

describe("Get Request example", () => {
  it("Find Pets by Status", async () => {
    const response = request("https://petstore.swagger.io/v2").get("/store/inventory");
    console.log((await response).status);
    console.log((await response).body);
  });
});
