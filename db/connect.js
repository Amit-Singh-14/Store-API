import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.connect(url).then(console.log("db connected")).catch(console.error);
};

export default connectDB;
