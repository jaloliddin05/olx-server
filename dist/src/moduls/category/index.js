"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const model_1 = require("../subcategory/model");
const model_2 = require("./model");
const GET = async (req, res) => {
    const allcategories = await model_2.CategoryModel.find();
    const allSubCategories = await model_1.SubCategoryModel.find();
    res.json({ allcategories, allSubCategories });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { title, img, color } = req.body;
    const newCategory = await model_2.CategoryModel.create({ title, img, color });
    const allcategories = await model_2.CategoryModel.find();
    res.json(allcategories);
};
exports.POST = POST;
const PUT = async (req, res) => {
    const { title, img, color, id } = req.body;
    const newCategory = await model_2.CategoryModel.findByIdAndUpdate(id, {
        title,
        img,
        color,
    });
    const allcategories = await model_2.CategoryModel.find();
    res.json(allcategories);
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    const { id } = req.body;
    const newCategory = await model_2.CategoryModel.deleteOne({ _id: id });
    const allcategories = await model_2.CategoryModel.find();
    res.json(allcategories);
};
exports.DELETE = DELETE;
