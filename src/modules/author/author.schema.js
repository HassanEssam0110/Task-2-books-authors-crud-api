import Joi from "joi";
import { generalRules } from "../../utils/index.utils.js";

const getAuthorSchema = {
  params: Joi.object({
    id: generalRules.id.required(),
  }),
};

const createAuthorSchema = {
  body: Joi.object({
    name: generalRules.name.required(),
    birthdate: generalRules.birthdate.required(),
  }),
};

const updateAuthorSchema = {
  params: Joi.object({
    id: generalRules.id.required(),
  }),
  body: Joi.object({
    name: generalRules.name.optional(),
    birthdate: generalRules.birthdate.optional(),
  }),
};

const deleteAuthorSchema = {
  params: Joi.object({
    id: generalRules.id.required(),
  }),
};

export {
  getAuthorSchema,
  createAuthorSchema,
  updateAuthorSchema,
  deleteAuthorSchema,
};
