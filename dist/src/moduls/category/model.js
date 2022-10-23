"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
}, {
    collection: "category_collection",
});
exports.CategoryModel = mongoose_1.default.model("Categories", CategorySchema);
