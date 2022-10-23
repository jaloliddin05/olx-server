import { Request, Response } from "express";
import { AnnouncementModel } from "./model";

export const GET = async (req: Request, res: Response) => {
  const allAnnouncement = await AnnouncementModel.find();
  res.json(allAnnouncement);
};

export const GET_BY_USER_ID = async (req: Request, res: Response) => {
  const { id } = req.body;
  const userAnnouncement = await AnnouncementModel.find({ userId: id });
  res.json(userAnnouncement);
};

export const GET_BY_CATEGORY_ID = async (req: Request, res: Response) => {
  const { id } = req.body;
  const categoryAnnouncement = await AnnouncementModel.find({ categoryId: id });
  res.json(categoryAnnouncement);
};

export const POST = async (req: Request, res: Response) => {
  const {
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
  } = req.body;
  const newAnnouncement = await AnnouncementModel.create({
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
  const userAnnouncement = await AnnouncementModel.find({ userId });
  res.json({ userAnnouncement, newAnnouncement });
};

export const PUT = async (req: Request, res: Response) => {
  const {
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
    id,
  } = req.body;
  const updatedAnnouncement = await AnnouncementModel.findByIdAndUpdate(id, {
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
  const userAnnouncement = await AnnouncementModel.find({ userId });
  res.json({ userAnnouncement, updatedAnnouncement });
};

export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.body;
  const newAnnouncement = await AnnouncementModel.deleteOne({ _id: id });
  const allAnnouncement = await AnnouncementModel.find();
  res.json(allAnnouncement);
};
