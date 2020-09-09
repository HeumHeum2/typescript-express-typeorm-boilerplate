import { createConnection, getConnectionOptions, getConnection } from "typeorm";

export default async () => {
  let name = "test";
  if (process.env.NODE_ENV === "production") {
    name = process.env.NODE_ENV;
  }
  const connectionOptions = await getConnectionOptions(name);
  await createConnection({ ...connectionOptions });
};

export const closeDatabaseConn = async () => {
  getConnection().close();
};
