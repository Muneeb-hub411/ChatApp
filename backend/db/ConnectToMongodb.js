import mongoose, { connect } from "mongoose";

const ConnectToMongo = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error in connected to db :", error);
  }
};
export default ConnectToMongo;
