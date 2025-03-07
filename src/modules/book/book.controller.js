import { Book } from "../../database/models/index.models.js";
import * as handler from "../handler-factory.modules.js";

// GET /api/v1/books                         Retrieve all books
// GET /api/v1/authors/:authorId/books       Retrieve all books for a specific author
const getBooks = handler.getAll(Book, {
  path: "author",
  select: "name birthdate",
});

// GET /api/v1/books/:id                     Retrieve a specific book by ID.
// GET /api/v1/authors/:authorId/books/id    Retrieve a specific book by ID for a specific author
const getBook = handler.getOne(Book, {
  path: "author",
  select: "name birthdate",
});

// POST /api/v1/books      Create a new author.
const createBook = handler.createOne(Book);

// PUT /api/v1/books/:id        Update a specific author by ID.
const updateBook = handler.updateOne(Book);

// DELETE /api/v1/books/:id     Delete a specific author by ID.
const deleteBook = handler.deleteOne(Book);

export { createBook, updateBook, deleteBook, getBook, getBooks };
