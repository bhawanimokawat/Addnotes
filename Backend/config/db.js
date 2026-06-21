import mongoose from "mongoose";

const connectDB = async () => {
    const MONGO_URI =process.env.MONGO_URI;


 
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;