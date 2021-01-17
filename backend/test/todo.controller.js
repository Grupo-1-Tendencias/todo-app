import chai from "chai";
import request from "supertest";
import Server from "../server";

const expect = chai.expect;

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

  it("should send description as an empty string when attempting to add new todo with missing description property", () => {
    const todo = {
      name: "Do french homework",
      dueDate: "20-04-2021",
      isDone: false,
    };
    return request(Server)
      .post("/api/todo")
      .send(todo)
      .then((r) => {
        expect(r.statusCode).to.equal(201);
        expect(r.body)
          .to.be.an.an("object")
          .that.has.property("description")
          .equal("");
      });
  });

  it("should send dueDate as an empty string when attempting to add new todo with missing dueDate property", () => {
    const todo = {
      name: "Do french homework",
      description: "Do exercises in pages 24 and 25",
      isDone: false,
    };
    return request(Server)
      .post("/api/todo")
      .send(todo)
      .then((r) => {
        expect(r.statusCode).to.equal(201);
        expect(r.body)
          .to.be.an.an("object")
          .that.has.property("dueDate")
          .equal("");
      });
  });

  it("should send isDone as false when attempting to add new todo with missing isDone property", () => {
    const todo = {
      name: "Do french homework",
      description: "Do exercises in pages 24 and 25",
      dueDate: "06-05-2021",
    };
    return request(Server)
      .post("/api/todo")
      .send(todo)
      .then((r) => {
        expect(r.statusCode).to.equal(201);
        expect(r.body)
          .to.be.an.an("object")
          .that.has.property("isDone")
          .equal(false);
      });
  });

  it("should send bad request status code when receives an empty body", () => {
    const todo = {};
    return request(Server)
      .post("/api/todo")
      .send(todo)
      .then((r) => {
        expect(r.statusCode).to.equal(400);
      });
  });

  describe("test cases for update controller method", () => {
    it("Should request user data in json file", () => {
      /*
    function allTodos() {
      return [
          {id: 1, name: "alberto", isDone : false, dueDate : 20/1/2022},
          {id: 2, name: "kevin", isDone : false, dueDate : 20/1/2022},
          {id: 3, name: "diego", isDone : false, dueDate : 20/1/2022},
      ];
      }*/
      //return request(Server).post("/api/todo/update/1").send(allTodos());
      /*
    return request(Server).get("/api/todo/1").then((r) => expect("Content-Type", /json/)
    .then((r) => {
      expect(r.body)
        .to.be.an.an("object")
        .that.has.property("name")
        .equal("alberto");
    })); 
    */
      return request(Server)
        .get("/api/todo/1")
        .then((r) => {
          expect(r.statusCode).to.equal(201);
        });
    });
  });

  describe("test cases for delete controller method", () => {
    it("should delete an existing todo given its key", () => {
      const todo = {
        name: "Testing delete",
        description: "Pages 23 and 24 exercises 1-9",
        isDone: false,
        dueDate: "20-04-2021",
      };
      return request(Server)
        .post("/api/todo")
        .send(todo)
        .then((r) => {
          return request(Server)
            .delete("/api/todo/delete/" + r.body.key)
            .then((x) => {
              expect(x.statusCode).to.equal(200);
            });
        });
    });

    it("should give a 404 if the todo does not exist", () => {
      var a = "UnexistingKey";
      return request(Server)
        .delete("/api/todo/delete/" + a)
        .then((f) => {
          expect(f.statusCode).to.equal(404);
        });
    });
  });
});
