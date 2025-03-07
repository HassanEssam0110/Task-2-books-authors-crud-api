import { AppError } from "../utils/index.utils.js";

const reqKeys = ["body", "params", "query", "headers", "file"];

/**
 * Validation middleware
 * @param {Object} schema - The schema to validate the request against
 * @returns {Function} - The middleware function
 *
 * This middleware will validate the request against the given schema. If there are any validation errors, it will
 * construct an AppError with the errors and pass it to the next middleware. Otherwise, it will call the next middleware.
 */
export const validator = (schema) => {
  return (req, res, next) => {
    let errors = [];

    for (const key of reqKeys) {
      if (schema[key]) {
        const { error } = schema[key].validate(req[key], { abortEarly: false });

        if (error) {
          errors.push(
            ...error.details.map((err) => ({
              key: err.context.key,
              message: err.message,
            }))
          );
        }
      }
    }

    // If there are any validation errors, format and pass them to the next middleware as an AppError
    if (errors.length) {
      return next(new AppError(422, "Validation failed", errors));
    }

    next();
  };
};
