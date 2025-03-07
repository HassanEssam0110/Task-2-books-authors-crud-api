
/**
 * @description Middleware to wrap async route handlers and catch errors.
 * @param {function} fn - The async function to wrap
 * @returns {function} - The wrapped function
 */
export const errorHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
