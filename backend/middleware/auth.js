import { User } from "../modal/User.js"; 

import jwt from "jsonwebtoken";
 
export const isAuthenticated = async(req,res, next)=>{
    try {
        
        const {token}=req.cookies;
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Please login to access the resource",
            });
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user= await User.findById(decoded._id);
        // console.log("user data",user);
        req.user=user;
        // console.log("isAuthenticated function run");

        next();

    } catch (error) {
        console.log(error.message);
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}