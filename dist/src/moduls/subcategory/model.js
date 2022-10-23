"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const SubCategorySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Categories",
    },
}, {
    collection: "subCategory_collection",
});
exports.SubCategoryModel = mongoose_1.default.model("SubCategories", SubCategorySchema);
