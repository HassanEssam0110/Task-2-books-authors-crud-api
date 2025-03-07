import Joi from "joi";
import { generalRules } from "../../utils/index.utils.js";

const getBooksSchema = {
  params: Joi.object({
    authorId: generalRules.id.optional(),
  }),
};
const getBookSchema = {
  params: Joi.object({
    authorId: generalRules.id.optional(),
    id: generalRules.id.required(),
  }),
};

const createBookSchema = {
  params: Joi.object({
    authorId: generalRules.id.optional(),
  }),
  body: Joi.object({
    title: generalRules.name.required(),
    publishedDate: generalRules.publicationDate.required(),
    author: generalRules.id.optional(),
  }),
};

const updateBookSchema = {
  params: Joi.object({
    authorId: generalRules.id.optional(),
    id: generalRules.id.required(),
  }),
  body: Joi.object({
    title: generalRules.name.optional(),
    publishedDate: generalRules.publicationDate.optional(),
    author: generalRules.id.optional(),
  }),
};

const deleteBookSchema = {
  params: Joi.object({
    authorId: generalRules.id.optional(),
    id: generalRules.id.required(),
  }),
};

export {
  getBooksSchema,
  getBookSchema,
  createBookSchema,
  updateBookSchema,
  deleteBookSchema,
};
