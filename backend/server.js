import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import authRoute from "./router/auth.route.js";
import messageRoute from "./router/message.route.js";
import ConnectToMongo from "./db/ConnectToMongodb.js";
const app = express();
configDotenv();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ChatApp</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
  ConnectToMongo();
});
