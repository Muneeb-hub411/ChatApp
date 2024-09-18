import jwt from "jsonwebtoken";
import UserModel from "../models/User.Model.js";
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).send({
        success: false,
        message: "Unauthorized user",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_Secret);

    if (!decode) {
      return res.status(400).send({
        success: false,
        message: "Error in decoding jwt",
      });
    }
    const user = await UserModel.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in middleware",
    });
  }
};
