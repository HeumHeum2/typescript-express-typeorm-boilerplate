import "reflect-metadata";
import * as express from "express";
import { Request, Response } from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import "dotenv/config";

import * as swaggerDocument from "./swagger.json";

// Import Routers
import userRouter from "./routes/user";

// create and setup express app
const app = express();
const prod = process.env.NODE_ENV === "production";

// middlewares
if (prod) {
  app.use(morgan("combined"));
  //TODO: app.use(cors) setting
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
}
app.set("port", process.env.PORT || 3000);
app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server OK :)");
});

// register routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", userRouter);

export default app;
