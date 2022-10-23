import { Request, Response } from "express";
import { SubCategoryModel } from "./model";

export const GET = async (req: Request, res: Response) => {
  const { categoryId } = req.body;
  const subcategoriesByCategoryId = await SubCategoryModel.find({ categoryId });
  res.json(subcategoriesByCategoryId);
};

export const POST = async (req: Request, res: Response) => {
  const { title, categoryId } = req.body;
  const newCategory = await SubCategoryModel.create({ title, categoryId });
  const subcategoriesByCategoryId = await SubCategoryModel.find({ categoryId });
  res.json(subcategoriesByCategoryId);
};

export const PUT = async (req: Request, res: Response) => {
  const { title, categoryId, id } = req.body;
  const newCategory = await SubCategoryModel.findByIdAndUpdate(id, {
    title,
    categoryId,
  });
  const subcategoriesByCategoryId = await SubCategoryModel.find({ categoryId });
  res.json(subcategoriesByCategoryId);
};

export const DELETE = async (req: Request, res: Response) => {
  const { id, categoryId } = req.body;
  const newCategory = await SubCategoryModel.deleteOne({ _id: id });
  const subcategoriesByCategoryId = await SubCategoryModel.find({ categoryId });
  res.json(subcategoriesByCategoryId);
};
