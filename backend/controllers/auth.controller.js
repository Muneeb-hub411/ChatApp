import bcrypt from "bcrypt";
import UserModel from "../models/User.Model.js";
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, gender, profilepic } = req.body;
    const hashedpass = await bcrypt.hash(password, 10);
    const existinguser = UserModel.find({ username });
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "user already registered",
      });
    }
    const user = new UserModel({});
  } catch (error) {}
};
