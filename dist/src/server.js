"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const db_1 = require("./utils/db");
const router_1 = require("./router");
dotenv.config();
(0, db_1.mongo)()
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use(router_1.default);
app.listen(4444, () => console.log(4444));
