import dotenv from "dotenv";
import ConnectDB from "./db/connectDB.js";
import { app } from "./app.js";
dotenv.config();

ConnectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on ${process.env.PORT}`)
  })  
})
.catch((error) => {
    console.log("Mongodb Connection failed",error);
})
