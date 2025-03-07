import mongoose from "mongoose";
import { Book } from "./index.models.js";

const { Schema, model, models } = mongoose;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

authorSchema.post("findOneAndDelete", async function (doc) {
  if (!doc) return; // Ensure the document exists before deleting books
  await Book.deleteMany({ author: doc._id });
});

export const Author = models.Author || model("Author", authorSchema);
