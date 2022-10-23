import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { UserModel } from "./model";
import { sign } from "../../utils/jwt";

export const Register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const checkEmail = await UserModel.findOne({ email });
  if (checkEmail) {
    return res.send({ message: "Email is already exist" });
  }
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = await UserModel.create({ email, password: hashedPassword });
  const token = sign({ id: newUser._id });
  return token;
};

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const findUser = await UserModel.findOne({ email });
  if (!findUser) {
    return res.sendStatus(404).send({ message: "email or password invalid" });
  }
  const checkPassword = await bcrypt.compare(password, findUser.password);
  if (!checkPassword) {
    return res.sendStatus(404).send({ message: "email or password invalid" });
  }
  const token = sign({ id: findUser._id });
  return token;
};
