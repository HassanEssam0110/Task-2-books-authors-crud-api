import { Author } from "../../database/models/index.models.js";
import * as handler from "../handler-factory.modules.js";

// GET /api/v1/authors       Retrieve a list of all authors.
const getAuthors = handler.getAll(Author);
// GET /api/v1/authors/:id         Retrieve a specific author by ID.
const getAuthor = handler.getOne(Author);
// POST /api/v1/authors     Create a new author.
const createAuthor = handler.createOne(Author);
// PUT /api/v1/authors/:id        Update a specific author by ID.
const updateAuthor = handler.updateOne(Author);
// DELETE /api/v1/authors/:id     Delete a specific author by ID.
const deleteAuthor = handler.deleteOne(Author);

export { createAuthor, updateAuthor, deleteAuthor, getAuthor, getAuthors };
