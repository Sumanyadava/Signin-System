import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import router from "./src/router/user.auth.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


connectDB();
 

app.use("/api/auth",router)
app.get('/',(req,res) => {
  //:display on / route
  res.send('server is running...')
})
const port = process.env.PORT || 3000
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
     