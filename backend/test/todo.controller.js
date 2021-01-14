import chai from "chai";
import request from "supertest";
import Server from "../server";

const expect = chai.expect;

console.log(
  `This is temporal, please ignore:... ${chai.version} ${request.name} ${Server} ${expect.name}...`
);

describe("Stub test for controller and server", () => {
  it("should send an object to controller.stub and receive the same object", () =>
    request(Server)
      .post("/api/todo/stub")
      .send({ name: "test" })
      .expect("Content-Type", /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an.an("object")
          .that.has.property("name")
          .equal("test");
      }));
});
