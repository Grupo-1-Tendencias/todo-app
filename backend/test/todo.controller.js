import chai from "chai";
import request from "supertest";
import Server from "../server";

const expect = chai.expect;

console.log(
  `This is temporal: ${chai.version} ${request.name} ${Server} ${expect.name}`
);
