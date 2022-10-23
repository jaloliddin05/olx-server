import { Request, Response } from "express";
import { SubCategoryModel } from "../subcategory/model";
import { CategoryModel } from "./model";

export const GET = async (req: Request, res: Response) => {
  const allcategories = await CategoryModel.find();
  const allSubCategories = await SubCategoryModel.find();
  res.json({ allcategories, allSubCategories });
};

export const POST = async (req: Request, res: Response) => {
  const { title, img, color } = req.body;
  const newCategory = await CategoryModel.create({ title, img, color });
  const allcategories = await CategoryModel.find();
  res.json(allcategories);
};

export const PUT = async (req: Request, res: Response) => {
  const { title, img, color, id } = req.body;
  const newCategory = await CategoryModel.findByIdAndUpdate(id, {
    title,
    img,
    color,
  });
  const allcategories = await CategoryModel.find();
  res.json(allcategories);
};

export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.body;
  const newCategory = await CategoryModel.deleteOne({ _id: id });
  const allcategories = await CategoryModel.find();
  res.json(allcategories);
};
