import express from "express";
import router from "./routes/route.js";
import cors from 'cors'
import DBConnection from "./database/db.js";
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(cors());
app.use('/',router)
DBConnection();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})