import * as request from "supertest";
import app from "../src/index";
import { createConnection, getConnection } from "typeorm";

import { User } from "../src/entity/User";

import { ConnectionManager } from "typeorm";
// import databaseConn from "../src/databaseConn";
// import { closeDatabaseConn } from "../src/databaseConn";

// performs connection

beforeAll(async () => {
  const connectionManager = new ConnectionManager();
  const connection = connectionManager.create({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "qweasd123@",
    database: "typeorm",
  });
  await connection.connect();
  //   await databaseConn();
});

describe("Users", () => {
  it("한번 테스트해보자!", async done => {
    const result = await request(app).get("/api/user");
    console.log(result.text);
    done();
  });
});

// afterAll(async () => {
//   await closeDatabaseConn();
// });
