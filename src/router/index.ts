import { Router } from "express";
const router = Router();

import * as categories from "../moduls/category";
import * as subCategories from "../moduls/subcategory";
import * as announcements from "../moduls/announcement";
import * as users from "../moduls/users";

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

export default router;
