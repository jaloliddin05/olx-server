"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Register = void 0;
const bcrypt = require("bcrypt");
const model_1 = require("./model");
const jwt_1 = require("../../utils/jwt");
const Register = async (req, res) => {
    const { email, password } = req.body;
    const checkEmail = await model_1.UserModel.findOne({ email });
    if (checkEmail) {
        return res.send({ message: "Email is already exist" });
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = await model_1.UserModel.create({ email, password: hashedPassword });
    const token = (0, jwt_1.sign)({ id: newUser._id });
    return token;
};
exports.Register = Register;
const Login = async (req, res) => {
    const { email, password } = req.body;
    const findUser = await model_1.UserModel.findOne({ email });
    if (!findUser) {
        return res.sendStatus(404).send({ message: "email or password invalid" });
    }
    const checkPassword = await bcrypt.compare(password, findUser.password);
    if (!checkPassword) {
        return res.sendStatus(404).send({ message: "email or password invalid" });
    }
    const token = (0, jwt_1.sign)({ id: findUser._id });
    return token;
};
exports.Login = Login;
