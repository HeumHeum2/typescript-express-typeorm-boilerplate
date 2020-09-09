// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import { Request, Response } from "express";
// import * as express from "express";
// import * as morgan from "morgan";
// import * as cors from "cors";
// import "dotenv/config";

// // Import Routers
// import { userRouter } from "./routes/User";
// import { postRouter } from "./routes/Post";
// import { Photo } from "./entity/Photo";
// import { PhotoMetadata } from "./entity/PhotoMetadata";
// import { Author } from "./entity/Author";
// import { Album } from "./entity/Album";

// const prod = process.env.NODE_ENV === "production";
// const app = express();
// // Connect typeORM mysql
// createConnection()
//   .then(async () => {
//     console.log("Database Connected :)");
//   })
//   .catch(error => console.log(error));

// // Create express server

// // middlewares
// if (prod) {
//   app.use(morgan("combined"));
//   // app.use(cors({}))
// } else {
//   app.use(morgan("dev"));
//   app.use(
//     cors({
//       origin: true,
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       credentials: true,
//     })
//   );
// }
// app.use("/", express.static("uploads"));
// app.set("port", process.env.PORT || 3000);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// if (prod) {
//   // production here
// } else {
//   app.listen(app.get("port"), () =>
//     console.log(`Lawdians App Lisening on PORT ${app.get("port")}`)
//   );
// }

// // Routes
// app.use("/users", userRouter);
// // app.use("/posts", postRouter);

// export default app;

// // createConnection()
// //   .then(async connection => {
// // // create express app
// // const app = express();

// // const prod = process.env.NODE_ENV === "production";
// // if (prod) {
// //   app.use(morgan("combined"));
// // } else {
// //   app.use(morgan("dev"));
// // }

// // // Express configuration

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // AppRoutes.forEach(route => {
// //   app[route.method](
// //     route.path,
// //     (req: Request, res: Response, next: Function) => {
// //       route
// //         .action(req, res)
// //         .then(() => next)
// //         .catch(err => next(err));
// //     }
// //   );
// // });

// // app.get("/", (req: Request, res: Response) => {
// //   res.send("backend start");
// // });

// // // run app
// // app.listen(3000);

// // console.log("Express application is up and running on port 3000");

// // // create a few albums
// // let album1 = new Album();
// // album1.name = "Bears";
// // await connection.manager.save(album1);

// // let album2 = new Album();
// // album2.name = "Me";
// // await connection.manager.save(album2);

// // // create a photo
// // let photo = new Photo();
// // photo.name = "Me and Bears";
// // photo.description = "I am near polar bears";
// // photo.filename = "photo-with-bears.jpg";
// // photo.views = 1;
// // photo.isPublished = true;
// // photo.albums = [album1, album2];
// // await connection.manager.save(photo);

// // const loadedPhoto = await connection
// //   .getRepository(Photo)
// //   .findOne(12, { relations: ["albums"] });

// // console.log(loadedPhoto);
// // photo.views = 1;
// // photo.isPublished = true;

// // // create a photo metadata
// // let metadata = new PhotoMetadata();
// // metadata.height = 640;
// // metadata.width = 480;
// // metadata.compressed = true;
// // metadata.comment = "cybershoot";
// // metadata.orientation = "portrait";
// // // metadata.photo = photo; // this way we connect then
// // photo.metadata = metadata;

// // // get entity repositories
// // let photoRepository = connection.getRepository(Photo);
// // let photos = await photoRepository.find({ relations: ["metadata"] });

// // let metadataRepository = connection.getRepository(PhotoMetadata);

// // // first we should save a photo
// // await photoRepository.save(photo);

// // console.log("Photo is saved, photo metadata is saved too.");

// // // photo is saved. Now we need to save a photo metadata
// // await metadataRepository.save(metadata);

// // // done
// // console.log(
// //   "Metadata is saved, and relation between metadata and photo is create in the database too"
// // );

// // await photoRepository.save(photo);
// // console.log("Photo has ben saved");

// // let savedPhotos = await photoRepository.find();
// // console.log("All photos from the db: ", savedPhotos);

// // let allPhotos = await photoRepository.find();
// // console.log("All photos from the db:", allPhotos);

// // let firstPhoto = await photoRepository.findOne(1);
// // console.log("First photo from the db:", firstPhoto);

// // let meAndBearsPhoto = await photoRepository.findOne({
// //   name: "Me and Bears",
// // });
// // console.log("Me and Bears photo from the db:", meAndBearsPhoto);

// // let allViewedPhotos = await photoRepository.find({ views: 1 });
// // console.log("All viewed photos", allViewedPhotos);

// // let allPublishedPhotos = await photoRepository.find({ isPublished: true });
// // console.log("All published photos", allPublishedPhotos);

// // let [allPhoto, photosCount] = await photoRepository.findAndCount();
// // console.log("All photos: ", allPhoto);
// // console.log("Photos count: ", photosCount);

// // let photoToUpdate = await photoRepository.findOne(1);
// // photoToUpdate.name = "Me, my friends and polar bears";
// // await photoRepository.save(photoToUpdate);

// // let photoToRemove = await photoRepository.findOne(1);
// // await photoRepository.remove(photoToRemove);

// // let photos2 = await connection
// //   .getRepository(Photo)
// //   .createQueryBuilder("photo")
// //   .innerJoinAndSelect("photo.metadata", "metadata")
// //   .getMany();

// // console.log(photos2);
// // })
// // .catch(error => console.error("TypeORM connection error: ", error));

// module.exports = app;
