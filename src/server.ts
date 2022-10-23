import * as dotenv from "dotenv";
import * as express from "express";
import { mongo } from "./utils/db";
import router from "./router";

dotenv.config();
mongo()
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log(err));
const app: express.Application = express();

app.use(express.json());

app.use(router);

app.listen(4444, () => console.log(4444));
