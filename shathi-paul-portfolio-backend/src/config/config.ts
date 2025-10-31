import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const envConfig = {
  node_env: process.env.NODE_ENV as string,
  port: process.env.PORT as string,
  database_url: process.env.DATABASE_URL as string,
  salt_round: process.env.SALT_ROUND as string,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET as string,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN as string,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET as string,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN as string,
  FRONTEND_URL: process.env.FRONTEND_URL as string,
  EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET as string,
};
