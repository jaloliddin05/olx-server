import * as jwt from "jsonwebtoken";

export const sign = (payload) => {
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 600,
  });
};
