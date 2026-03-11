import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect("mongodb+srv://sahilyadav:sahilyadav@123@cluster0.to93gge.mongodb.net/veilverse");

    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};