"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET_BY_CATEGORY_ID = exports.GET_BY_USER_ID = exports.GET = void 0;
const model_1 = require("./model");
const GET = async (req, res) => {
    const allAnnouncement = await model_1.AnnouncementModel.find();
    res.json(allAnnouncement);
};
exports.GET = GET;
const GET_BY_USER_ID = async (req, res) => {
    const { id } = req.body;
    const userAnnouncement = await model_1.AnnouncementModel.find({ userId: id });
    res.json(userAnnouncement);
};
exports.GET_BY_USER_ID = GET_BY_USER_ID;
const GET_BY_CATEGORY_ID = async (req, res) => {
    const { id } = req.body;
    const categoryAnnouncement = await model_1.AnnouncementModel.find({ categoryId: id });
    res.json(categoryAnnouncement);
};
exports.GET_BY_CATEGORY_ID = GET_BY_CATEGORY_ID;
const POST = async (req, res) => {
    const { title, categoryId, img, price, addres, info, applicant, email, phone, userId, } = req.body;
    const newAnnouncement = await model_1.AnnouncementModel.create({
        title,
        categoryId,
        img,
        price,
        addres,
        info,
        applicant,
        email,
        phone,
        userId,
    });
    const userAnnouncement = await model_1.AnnouncementModel.find({ userId });
    res.json({ userAnnouncement, newAnnouncement });
};
exports.POST = POST;
const PUT = async (req, res) => {
    const { title, categoryId, img, price, addres, info, applicant, email, phone, userId, id, } = req.body;
    const updatedAnnouncement = await model_1.AnnouncementModel.findByIdAndUpdate(id, {
        title,
        categoryId,
        img,
        price,
        addres,
        info,
        applicant,
        email,
        phone,
        userId,
    });
    const userAnnouncement = await model_1.AnnouncementModel.find({ userId });
    res.json({ userAnnouncement, updatedAnnouncement });
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    const { id } = req.body;
    const newAnnouncement = await model_1.AnnouncementModel.deleteOne({ _id: id });
    const allAnnouncement = await model_1.AnnouncementModel.find();
    res.json(allAnnouncement);
};
exports.DELETE = DELETE;
