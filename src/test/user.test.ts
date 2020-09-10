import * as request from "supertest";
import { getConnection, Connection } from "typeorm";
import app from "../index";
import { createTypeormConn } from "../utils/createTypeormConn";

let conn: Connection;
// afterAll(async () => {
//   conn.close();
// });

describe("GET /api/user", () => {
  beforeAll(async () => {
    conn = await createTypeormConn();
  });
  describe("When creating a new user", () => {
    it("Create User", async () => {
      const newUser = {
        firstName: "jo",
        lastName: "eunheum",
        age: 25,
      };
      const response = await request(app).post("/api/users").send(newUser);
      expect(response.status).toBe(200);

      expect(response.body.firstName).toBe("jo");
      expect(response.body.lastName).toBe("eunheum");
      expect(response.body.age).toBe(25);
    });
  });

  it("Get Users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
  });
});
