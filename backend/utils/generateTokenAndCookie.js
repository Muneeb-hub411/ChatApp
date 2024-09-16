import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = async (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_Secret, {
      expiresIn: "15d",
    });
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60,
      httpOnly: true,
      sameSite: "strict",
      secure: "development",
    });
  } catch (error) {
    console.log(error);
  }
};

export default generateTokenAndSetCookie;
