import mongoose from "mongoose";

export const mongo = async () => {
  try {
    return mongoose.connect(process.env.DB_URI);
  } catch (err) {
    console.log(err);
  }
};
