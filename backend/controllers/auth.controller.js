import bcrypt from "bcrypt";
import UserModel from "../models/User.Model.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndCookie.js";
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).send({
        success: false,
        message: "Password doesnt Match",
      });
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const existinguser = UserModel.find({ username });
    if (!existinguser) {
      return res.status(200).send({
        success: false,
        message: "user already registered",
      });
    }
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const user = await new UserModel({
      fullname,
      username,
      password: hashedpass,
      gender,
      profilepic: gender == "male" ? boyProfilePic : girlProfilePic,
    }).save();
    return res.status(200).send({
      success: true,
      message: "User Created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in signing up",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    const ispasswordcorrect = await bcrypt.compare(password, user.password);

    if (!user || !ispasswordcorrect) {
      return res.status(400).send({
        success: false,
        message: "email or password is incorrect",
      });
    }
    generateTokenAndSetCookie(user._id, res);
    return res.status(200).send({
      success: true,
      message: "login successfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in logging in",
    });
  }
};
