"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementModel = void 0;
const mongoose_1 = require("mongoose");
const ImgSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true,
    },
});
const PriceSchema = new mongoose_1.default.Schema({
    sum: {
        type: String,
    },
    yevro: {
        type: String,
    },
});
const AnnouncementSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
    },
    img: [ImgSchema],
    price: PriceSchema,
    addres: {
        type: String,
        required: true,
    },
    info: {
        type: String,
    },
    applicant: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Users",
    },
}, {
    collection: "Announcement_collection",
});
exports.AnnouncementModel = mongoose_1.default.model("Announcements", AnnouncementSchema);
