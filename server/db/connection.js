import mongoose from "mongoose";
const url = process.env.MONGO_URL;
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (conn) {
      console.log(`MongoDB connected: ${conn.connection.host}`);
    }
  } catch (error) {
    console.error(error);
  }
};
