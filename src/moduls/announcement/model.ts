import mongoose from "mongoose";

const ImgSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
});
const PriceSchema = new mongoose.Schema({
  sum: {
    type: String,
  },
  yevro: {
    type: String,
  },
});

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
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
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    collection: "Announcement_collection",
  }
);

export const AnnouncementModel = mongoose.model(
  "Announcements",
  AnnouncementSchema
);
