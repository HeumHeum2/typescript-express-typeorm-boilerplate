import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import * as morgan from "morgan";
import * as cors from "cors";
import "dotenv/config";

// Import Routers
import { userRouter } from "./routes/users";

// create typeorm connection
createConnection()
  .then(connection => {
    const prod = process.env.NODE_ENV === "production";
    // create and setup express app
    const app = express();

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

    // register routes
    app.use("/users", userRouter);

    // start express server
    if (prod) {
      //TODO : Write production server
    } else {
      app.listen(app.get("port"), () => {
        console.log(`Lawdians App Listening on PORT ${app.get("port")}`);
      });
    }
  })
  .catch(error => console.error(error));
