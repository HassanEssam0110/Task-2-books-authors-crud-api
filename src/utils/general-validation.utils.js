import Joi from "joi";
import { Types } from "mongoose";

const validateId = (value, helpers) => {
  const isValid = Types.ObjectId.isValid(value);
  return isValid ? value : helpers.message("Invalid Object Id");
};

export const generalRules = {
  // Common
  id: Joi.string().custom(validateId),

  // Author Rules
  name: Joi.string().min(2).max(200).messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least {#limit} characters long",
    "string.max": "Name cannot be longer than {#limit} characters",
  }),
  birthdate: Joi.date().iso().less("now").messages({
    "date.base": "Birthdate must be a valid date",
    "date.format": "Birthdate must be in YYYY-MM-DD format",
    "date.less": "Birthdate must be in the past",
    "any.required": "Birthdate is required",
  }),

  // Book Rules
  title: Joi.string().min(2).max(200).messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least {#limit} characters long",
    "string.max": "Title cannot be longer than {#limit} characters",
  }),
  publicationDate: Joi.date().iso().messages({
    "date.base": "Publication date must be a valid date",
    "date.format": "Publication date must be in YYYY-MM-DD format",
    "any.required": "Publication date is required",
  }),
};
