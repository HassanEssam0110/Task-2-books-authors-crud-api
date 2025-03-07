import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.CONNECTION_DB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
