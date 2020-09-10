import app from "./index";
import { createTypeormConn } from "./utils/createTypeormConn";

const prod = process.env.NODE_ENV === "production";

// create typeorm connection
createTypeormConn();

// start express server
if (prod) {
  //TODO : Write production server
} else {
  app.listen(app.get("port"), () => {
    console.log(`Lawdians App Listening on PORT ${app.get("port")}`);
  });
}
