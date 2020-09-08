import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import { AppRoutes } from "./routes";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
import { Author } from "./entity/Author";
import { Album } from "./entity/Album";

createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(express.json());

    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");

    // // create a few albums
    // let album1 = new Album();
    // album1.name = "Bears";
    // await connection.manager.save(album1);

    // let album2 = new Album();
    // album2.name = "Me";
    // await connection.manager.save(album2);

    // // create a photo
    // let photo = new Photo();
    // photo.name = "Me and Bears";
    // photo.description = "I am near polar bears";
    // photo.filename = "photo-with-bears.jpg";
    // photo.views = 1;
    // photo.isPublished = true;
    // photo.albums = [album1, album2];
    // await connection.manager.save(photo);

    // const loadedPhoto = await connection
    //   .getRepository(Photo)
    //   .findOne(12, { relations: ["albums"] });

    // console.log(loadedPhoto);
    // photo.views = 1;
    // photo.isPublished = true;

    // // create a photo metadata
    // let metadata = new PhotoMetadata();
    // metadata.height = 640;
    // metadata.width = 480;
    // metadata.compressed = true;
    // metadata.comment = "cybershoot";
    // metadata.orientation = "portrait";
    // // metadata.photo = photo; // this way we connect then
    // photo.metadata = metadata;

    // // get entity repositories
    // let photoRepository = connection.getRepository(Photo);
    // let photos = await photoRepository.find({ relations: ["metadata"] });

    // let metadataRepository = connection.getRepository(PhotoMetadata);

    // // first we should save a photo
    // await photoRepository.save(photo);

    // console.log("Photo is saved, photo metadata is saved too.");

    // // photo is saved. Now we need to save a photo metadata
    // await metadataRepository.save(metadata);

    // // done
    // console.log(
    //   "Metadata is saved, and relation between metadata and photo is create in the database too"
    // );

    // await photoRepository.save(photo);
    // console.log("Photo has ben saved");

    // let savedPhotos = await photoRepository.find();
    // console.log("All photos from the db: ", savedPhotos);

    // let allPhotos = await photoRepository.find();
    // console.log("All photos from the db:", allPhotos);

    // let firstPhoto = await photoRepository.findOne(1);
    // console.log("First photo from the db:", firstPhoto);

    // let meAndBearsPhoto = await photoRepository.findOne({
    //   name: "Me and Bears",
    // });
    // console.log("Me and Bears photo from the db:", meAndBearsPhoto);

    // let allViewedPhotos = await photoRepository.find({ views: 1 });
    // console.log("All viewed photos", allViewedPhotos);

    // let allPublishedPhotos = await photoRepository.find({ isPublished: true });
    // console.log("All published photos", allPublishedPhotos);

    // let [allPhoto, photosCount] = await photoRepository.findAndCount();
    // console.log("All photos: ", allPhoto);
    // console.log("Photos count: ", photosCount);

    // let photoToUpdate = await photoRepository.findOne(1);
    // photoToUpdate.name = "Me, my friends and polar bears";
    // await photoRepository.save(photoToUpdate);

    // let photoToRemove = await photoRepository.findOne(1);
    // await photoRepository.remove(photoToRemove);

    // let photos2 = await connection
    //   .getRepository(Photo)
    //   .createQueryBuilder("photo")
    //   .innerJoinAndSelect("photo.metadata", "metadata")
    //   .getMany();

    // console.log(photos2);
  })
  .catch(error => console.error("TypeORM connection error: ", error));
