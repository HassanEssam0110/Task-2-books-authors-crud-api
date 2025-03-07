import express from "express";
import morgan from "morgan";
import { bootstrap } from "./modules/index.modules.js";

const app = express();

/*Middleware */
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}
app.use(express.json());

/* Routes */
bootstrap(app);

export default app;
