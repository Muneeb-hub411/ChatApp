import UserModel from "../models/User.Model.js";

export const getUser = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUser = await UserModel.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    return res.status(200).send({
      success: true,
      filteredUser,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in getting user",
    });
  }
};
