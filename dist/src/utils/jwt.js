"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign = void 0;
const jwt = require("jsonwebtoken");
const sign = (payload) => {
    jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 600,
    });
};
exports.sign = sign;
