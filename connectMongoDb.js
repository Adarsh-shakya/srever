import mongoose from "mongoose";

//const CONNECTION_URL="mongodb+srv://admin:admin@stack-overflow-clone.zdvbxqk.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;

