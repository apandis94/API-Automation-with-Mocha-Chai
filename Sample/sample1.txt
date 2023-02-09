const request = require("supertest");
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

//const app = require('../app');
let token;
const app = "https://kasir-api.belajarqa.com";

chai.use(chaiHttp);

describe("Login API", () => {
  it("should return a token when user logs in", () => {
    var auth = {
      email: "kelontong.murah@gmail.com",
      password: "SUKAJAYA10",
    };

    chai
      .request(app)
      .post("/authentications")
      .send(auth)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        token = res.body.data.accessToken;
        //console.log(token);
        //res.body.should.have.property('message').eql('Book successfully added!');
        //res.body.book.should.have.property('title');
        //res.body.book.should.have.property('author');
        //res.body.book.should.have.property('pages');
        //res.body.book.should.have.property('year');
        // done();
      });

    var user = {
      name: "Task 1 Sanber",
      email: "task1sanber@gmail.com",
      password: "SUKAJAYA10",
    };

    console.log("token Tai " + token);

    chai
      .request(app)
      .post("/users")
      .send(user)
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        token = res.body.data.accessToken;
        console.log(res);
        //res.body.should.have.property('message').eql('Book successfully added!');
        //res.body.book.should.have.property('title');
        //res.body.book.should.have.property('author');
        //res.body.book.should.have.property('pages');
        //res.body.book.should.have.property('year');
        // done();
      });
  });
});

//describe("Register API", () => {
//  it("should return a token when user logs in", () => {
//
//  });
//});
