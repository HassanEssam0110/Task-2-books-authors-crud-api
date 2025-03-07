import { errorHandler } from "../middlewares/index.middleware.js";
import { AppError } from "../utils/index.utils.js";

/**
 * @description Get all documents in the collection (with optional filtering for related models).
 * @param {Model} Model - The mongoose model to query
 * @param {Object} [populateOptions] - The options to populate relations
 * @returns {function} - The route handler function
 */
const getAll = (Model, populateOptions) => {
  return errorHandler(async (req, res, next) => {
    // For nested book routes
    let filer = {};
    if (req.params.authorId) {
      filer = { author: req.params.authorId };
    }

    // 1- Build query
    let query = Model.find(filer);

    // Populate relations if needed
    if (populateOptions) query = query.populate(populateOptions);

    // 2 - Execute query
    const docs = await query;

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  });
};

/**
 * @description Get a single document by ID
 * @param {Model} Model - The mongoose model to query
 * @returns {function} - The route handler function
 */
const getOne = (Model, populateOptions) => {
  return errorHandler(async (req, res, next) => {
    const query = Model.findById(req.params.id);
    if (populateOptions) query.populate(populateOptions);
    const doc = await query;

    // Not found
    if (!doc) return next(new AppError(404, `${Model.modelName} not found`));

    // SEND RESPONSE
    res.status(200).json({ status: "success", data: doc });
  });
};

/**
 * @description Create a new document in the collection. (handles nested relations).
 * If the route is nested under an author, it assigns the authorId to the request body.
 * @param {Model} Model - The mongoose model to create a document for
 * @returns {function} - The route handler function
 */
const createOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    // For books under an author
    if (req.params.authorId) req.body.author = req.params.authorId;

    const doc = await Model.create(req.body);

    // SEND RESPONSE
    res.status(201).json({ status: "success", data: doc });
  });
};

/**
 * @description Update a specific document by ID in the collection.
 * @param {Model} Model - The mongoose model to update a document for
 * @returns {function} - The route handler function
 */
const updateOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Not found
    if (!doc) return next(new AppError(404, `${Model.modelName} not found`));
    // SEND RESPONSE
    res.status(200).json({ status: "success", data: doc });
  });
};

const deleteOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    const doc = await Model.findOneAndDelete({ _id: req.params.id });
    // Not found
    if (!doc) return next(new AppError(404, `${Model.modelName} not found`));

    // SEND RESPONSE
    res.status(204).send(); // No content
  });
};

export { getAll, getOne, createOne, updateOne, deleteOne };
