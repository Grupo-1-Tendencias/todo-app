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

describe("test cases for create controller method", () => {
  it("should add a new todo when body has all properties", () => {
    const todo = {
      name: "French homework",
      description: "Pages 23 and 24 exercises 1-9",
      isDone: false,
      dueDate: "20-04-2021",
    };
    return request(Server)
      .post("/api/todo")
      .send(todo)
      .then((r) => {
        expect(r.statusCode).to.equal(201);
      });
  });

  it("should send bad request when attempt to add new todo with missing name property", () => {
    const todo = {
      description: "Pages 23 and 24 exercises 1-9",
      dueDate: "20-04-2021",
      isDone: false,
    };
    return request(Server)
      .post("/api/todo")
      .send(todo)
      .then((r) => {
        expect(r.statusCode).to.equal(400);
      });
  });
});
