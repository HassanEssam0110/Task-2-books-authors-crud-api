# REST API with Relations and Multiple CRUD Operations

## Objective

Create a REST API that manages authors and their books, demonstrating relations and multiple CRUD operations.

## Technologies Used

- **Node.js** with **Express.js** as the web framework
- **MongoDB** as the database
- **Mongoose** as the ODM (Object-Document Mapping)
- **Joi** for input validation
- **dotenv** for environment variables
- **Nodemon** for development

## Installation and Setup

### 1. Clone the Repository

```sh
git clone [<repository_url>](https://github.com/HassanEssam0110/Task-2-books-authors-crud-api)
cd <Task-2-books-authors-crud-api>
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root directory and add the following variables:

```
#PORT
PORT=3000

# ENVIRONMENT
NODE_ENV="development"

# Database
CONNECTION_DB_URI="mongodb://127.0.0.1:27017/DB_books_authors"
```

### 4. Start the Server

For development mode:

```sh
npm run start:dev
```

For production mode:

```sh
npm run start:prod
```

## API Endpoints

All endpoints are prefixed with `/api/v1`

### Authors Endpoints

- **Create an Author** `POST /api/v1/authors`
  ```json
  {
    "name": "F. Scott Fitzgerald",
    "birthdate": "1896-09-24"
  }
  ```
- **Get All Authors** `GET /api/v1/authors`
- **Get a Specific Author by ID** `GET /api/v1/authors/:id`
- **Update an Author by ID** `PUT /api/v1/authors/:id`
  ```json
  {
    "name": "F. Scott Fitzgerald",
    "birthdate": "1896-09-24"
  }
  ```
- **Delete an Author by ID** `DELETE /api/v1/authors/:id`

### Books Endpoints

- **Create a Book for a Specific Author** `POST /api/v1/authors/:authorId/books`
  ```json
  {
    "title": "The Great Gatsby",
    "publishedDate": "1925-04-10"
  }
  ```
- **Get All Books for a Specific Author** `GET /api/v1/authors/:authorId/books`
- **Get a Specific Book by ID for a Specific Author** `GET /api/v1/authors/:authorId/books/:bookId`
- **Update a Specific Book by ID for a Specific Author** `PUT /api/v1/authors/:authorId/books/:bookId`
  ```json
  {
    "title": "The Great Gatsby",
    "publishedDate": "1925-04-10"
  }
  ```
- **Delete a Specific Book by ID for a Specific Author** `DELETE /api/v1/authors/:authorId/books/:bookId`

## Error Handling

- Proper validation using **Joi**.
- Returns appropriate **HTTP status codes**.
- Uses **custom error handling middleware**.

## Scripts

```json
"scripts": {
  "start:dev": "set NODE_ENV=development& nodemon server.js",
  "start:prod": "set NODE_ENV=production& node server.js"
}
```
