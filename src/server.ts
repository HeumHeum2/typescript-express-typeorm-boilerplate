import app from "./index";

const prod = process.env.NODE_ENV === "production";

// start express server
if (prod) {
  //TODO : Write production server
} else {
  app.listen(app.get("port"), () => {
    console.log(`Lawdians App Listening on PORT ${app.get("port")}`);
  });
}
