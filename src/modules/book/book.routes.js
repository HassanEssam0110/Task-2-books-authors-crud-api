import { Router } from "express";
import * as controller from "./book.controller.js";
import * as middleware from "../../middlewares/index.middleware.js";
import * as schema from "./book.schema.js";

const bookRouter = Router({ mergeParams: true });

bookRouter
  .route("/")
  .get(middleware.validator(schema.getBooksSchema), controller.getBooks)
  .post(middleware.validator(schema.createBookSchema), controller.createBook);

bookRouter
  .route("/:id")
  .get(middleware.validator(schema.getBookSchema), controller.getBook)
  .put(middleware.validator(schema.updateBookSchema), controller.updateBook)
  .delete(middleware.validator(schema.deleteBookSchema), controller.deleteBook);

export default bookRouter;
