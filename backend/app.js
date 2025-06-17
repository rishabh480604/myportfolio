import express from "express";
export const app=express();
import {userRouter} from "./routes/User.js"
import cookieParser from "cookie-parser";

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended:true, limit : "50mb"}));
app.use(cookieParser())

app.use('/api/v1',userRouter)

app.use(express.static(path.resolve("./frontend/dist")));

app.get(/.*/,(req , res)=>{
    res.sendFile(path.resolve("./frontend/dist/index.html"));
});
