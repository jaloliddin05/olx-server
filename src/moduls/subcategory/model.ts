import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
    },
  },
  {
    collection: "subCategory_collection",
  }
);

export const SubCategoryModel = mongoose.model(
  "SubCategories",
  SubCategorySchema
);
