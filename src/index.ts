import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
import { Author } from "./entity/Author";
import { Album } from "./entity/Album";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "qweasd123@",
  database: "typeorm",
  entities: [Photo, PhotoMetadata, Author, Album],
  synchronize: true,
  logging: false,
})
  .then(async connection => {
    let photos = await connection
      .getRepository(Photo)
      .createQueryBuilder("photo")
      .innerJoinAndSelect("photo.metadata", "metadata")
      .leftJoinAndSelect("photo.albums", "album")
      .where("photo.isPublished = true")
      .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
      .orderBy("photo.id", "DESC")
      .skip(5)
      .take(10)
      .setParameters({ photoName: "My", bearName: "Mishka" })
      .getMany();
    photos.forEach(photo => console.log(photo));
    // create a few albums
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

    // create a photo metadata
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

    // first we should save a photo
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

    // let photos = await connection
    //   .getRepository(Photo)
    //   .createQueryBuilder("photo")
    //   .innerJoinAndSelect("photo.metadata", "metadata")
    //   .getMany();

    // console.log(photos);
  })
  .catch(error => console.error(error));
