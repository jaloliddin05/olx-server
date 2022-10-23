"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const categories = require("../moduls/category");
const subCategories = require("../moduls/subcategory");
const announcements = require("../moduls/announcement");
const users = require("../moduls/users");
router
    .get("/categories", categories.GET)
    .get("/subcategories", subCategories.GET)
    .get("/announcements", announcements.GET)
    .get("/userannouncements", announcements.GET_BY_USER_ID)
    .get("/categoryannouncements", announcements.GET_BY_CATEGORY_ID)
    .post("/category", categories.POST)
    .post("/subcategory", subCategories.POST)
    .post("/announcement", announcements.POST)
    .post("/register", users.Register)
    .post("/login", users.Login)
    .put("/category", categories.PUT)
    .put("/subcategory", subCategories.PUT)
    .put("/announcement", announcements.PUT)
    .delete("/category", categories.DELETE)
    .delete("/subcategory", subCategories.DELETE)
    .delete("/announcement", announcements.DELETE);
exports.default = router;
