import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const CONNECTION_DRIVER = process.env.CONNECTION_DRIVER;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(CONNECTION_DRIVER);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDB