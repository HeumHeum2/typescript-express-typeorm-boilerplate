import * as request from "supertest";
import app from "../src/index";

describe("Test the root path", () => {
  it("it should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
