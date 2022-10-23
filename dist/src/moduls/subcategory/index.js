"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const model_1 = require("./model");
const GET = async (req, res) => {
    const { categoryId } = req.body;
    const subcategoriesByCategoryId = await model_1.SubCategoryModel.find({ categoryId });
    res.json(subcategoriesByCategoryId);
};
exports.GET = GET;
const POST = async (req, res) => {
    const { title, categoryId } = req.body;
    const newCategory = await model_1.SubCategoryModel.create({ title, categoryId });
    const subcategoriesByCategoryId = await model_1.SubCategoryModel.find({ categoryId });
    res.json(subcategoriesByCategoryId);
};
exports.POST = POST;
const PUT = async (req, res) => {
    const { title, categoryId, id } = req.body;
    const newCategory = await model_1.SubCategoryModel.findByIdAndUpdate(id, {
        title,
        categoryId,
    });
    const subcategoriesByCategoryId = await model_1.SubCategoryModel.find({ categoryId });
    res.json(subcategoriesByCategoryId);
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    const { id, categoryId } = req.body;
    const newCategory = await model_1.SubCategoryModel.deleteOne({ _id: id });
    const subcategoriesByCategoryId = await model_1.SubCategoryModel.find({ categoryId });
    res.json(subcategoriesByCategoryId);
};
exports.DELETE = DELETE;
