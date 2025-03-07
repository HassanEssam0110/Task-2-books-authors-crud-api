import { Router } from "express";
import * as controller from "./author.controller.js";
import * as middleware from "../../middlewares/index.middleware.js";
import * as schema from "./author.schema.js";
import bookRouter from "../book/book.routes.js";

const authorRouter = Router();

authorRouter
  .route("/")
  .get(controller.getAuthors)
  .post(
    middleware.validator(schema.createAuthorSchema),
    controller.createAuthor
  );

authorRouter
  .route("/:id")
  .get(middleware.validator(schema.getAuthorSchema), controller.getAuthor)
  .put(middleware.validator(schema.updateAuthorSchema), controller.updateAuthor)
  .delete(
    middleware.validator(schema.deleteAuthorSchema),
    controller.deleteAuthor
  );

// Nested route for books
authorRouter.use("/:authorId/books", bookRouter);

export default authorRouter;
