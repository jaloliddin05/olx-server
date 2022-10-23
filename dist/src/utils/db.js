"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const mongoose_1 = require("mongoose");
const mongo = async () => {
    try {
        return mongoose_1.default.connect(process.env.DB_URI);
    }
    catch (err) {
        console.log(err);
    }
};
exports.mongo = mongo;
