import path from "path";
import { config } from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/database/db-connection.js";

config({ path: path.resolve(".env") });

const port = process.env.PORT || 3000;

await connectDB();

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} - ${process.env.NODE_ENV} Mode`
  );
});
