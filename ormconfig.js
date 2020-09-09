module.exports = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  subscribers: ["src/migration/*.ts"],
  migrations: ["src/migration/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
