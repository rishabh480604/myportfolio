import { sendMail } from "../middleware/sendMail.js";
import {User} from "../modal/User.js"
import jwt from "jsonwebtoken";
import cloudinary from 'cloudinary';

export const login=async(req,res)=>{
    try{ 
        const {email,password}=req.body;
        const user=await User.findOne({email,password});

        if(!user){
            return res.status(400).json({
                error:error.message,
                success:false,
            });
        }
        const token= jwt.sign({_id:user._id},process.env.JWT_SECRET);

        res.status(200).cookie("token",token,{
            expires: new Date(Date.now()+ 600000),
            httpOnly:true,
        }).json({
            success:true,
            message:"logged In successfully"
        });


    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}


export const logout=async(req,res)=>{
    try{ 
        
        
        res.status(200).cookie("token",null,{
            expires: new Date(Date.now()),
            httpOnly:true,
        }).json({
            success:true,
            message:"logout successfully"
        });


    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const getUser= async(req,res)=>{
    try{
        const user=await User.findOne().select("-password -email");
        res.status(200).json({
            success:true,
            user,
        })


    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const myProfile=async(req,res)=>{
    try {
        const user=await User.findById(req.user._id);

        res.status(200).json({
            success:true,
            user,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const contact=async(req,res)=>{
    try {
        const {name,email,message} =req.body;

        const userMessage=`Hey, I am ${name}. My email is ${email}. My message is ${message}`;

        await sendMail(userMessage);

        return res.status(200).json({
            success:true ,
            message: "message sent successfully,"
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const updateUser=async (req,res)=>{
    try {

        const user=await User.findById(req.user._id);
        // console.log("req.user: ",req.user._id)
        const {name, email, password, skills, about} = req.body;
        // console.log("req data : ",about);
        // console.log("user.about.name =",user);
        if(name){
            user.name=name;
        }
        if(email){
            user.email=email;
        }
        if(password){
            user.password=password;
        }
        if(skills){
            if(skills.image1){ 
                await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(skills.image1,{
                    folder:"portfolio",
                });

                user.skills.image1={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            }

            if(skills.image2){ 
                await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(skills.image2,{
                    folder:"portfolio",
                });

                user.skills.image2={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            }

            if(skills.image3){ 
                await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(skills.image3,{
                    folder:"portfolio",
                });

                user.skills.image3={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            }

            if(skills.image4){ 
                await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(skills.image4,{
                    folder:"portfolio",
                });

                user.skills.image4={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            }

            if(skills.image5){ 
                await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(skills.image5,{
                    folder:"portfolio",
                });

                user.skills.image5={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            }

            if(skills.image6){ 
                await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(skills.image6,{
                    folder:"portfolio",
                });

                user.skills.image6={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            }

            
        }
        if(about){
            /* schema 
            name:String,
            title:String,
            subtitle:String,
            description:String,
            quote:String,
            avatar:{
                pubic_id:String,
                url:String,
            }
            */
         
            if(about.name){
                user.about.name=about.name;

            }

            if(about.title){

                user.about.title=about.title;
            }

            if(about.subtitle){
                user.about.subtitle=about.subtitle;
            }
            if(about.description){

                user.about.description=about.description;
            }
            if(about.quote){

                user.about.quote=about.quote;
            }

            if(about.avatar){
                await cloudinary.v2.uploader.destroy(about.avatar.public_id);
                const myCloud=await cloudinary.v2.uploader.upload(about.avatar,{
                    folder:"portfolio",
                });
                user.about.avatar={
                    public_id : myCloud.public_id,
                    url: myCloud.secure_url
                }
            }
        }

        await user.save();
        


        res.status(200).json({
            success:true,
            user,
        })
        
    } catch (error) {
        console.log("error : ", error.message);
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const addTimeline= async (req,res)=>{
    try {
        const {title, description,date}=req.body;
        const user=await User.findById(req.user._id);
        user.timeline.unshift({
            title,
            description,
            date,
        });

        await user.save();

        res.status(200).json({
            success:true,
            message:"Added to Timeline"
        })

        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
        
    }
}


export const addYoutube= async(req,res)=>{
    try {
        /* schema
        url: String,
        title: String,
        image:{
            public_id:String,
            url:String,
        },
         */
        const {url,title,image}=req.body;
        const user=await User.findById(req.user._id);
        const cloudResponse=await cloudinary.v2.uploader.upload(image,{
            folder:"portfolio",
        });


        user.youtube.unshift({
            url,
            title,
            image:{
                public_id:cloudResponse.public_id,
                url:cloudResponse.secure_url,
            }
        });

        await user.save();

        res.status(200).json({
            success:true,
            message:"Added to Youtube"
        })
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
        
    }
}

export const addProject= async (req,res)=>{
    try {
        /*schema 
        url: String,
            title: String,
            image:{
                public_id:String,
                url:String,
            },
            description: String,
            techStack: String,
        */
        const {title, url, image, description, techStack}=req.body;
        const user=await User.findById(req.user._id);
        const cloudResponse= await cloudinary.v2.uploader.upload(image,{
            folder:"prtfolio",
        })
        user.projects.unshift({
            title,
            image:{
                public_id:cloudResponse.public_id,
                url:cloudResponse.secure_url,
            },
            url,
            description,
            techStack,
        });

        await user.save();

        res.status(200).json({
            success:true,
            message:"Added to Project"
        })

        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
        
    }
}



export const deleteTimeline= async (req,res)=>{
    try {
        const {id}=req.params;

        const user=await User.findById(req.user._id);
        // console.log("tobe delete id:", id);

        user.timeline=user.timeline.filter((item)=> item._id!= id);
        // console.log(user.timeline);
        
        await user.save();

        res.status(200).json({
            success:true,
            message:"Removed from Timeline"
        })

        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
        
    }
}

export const deleteYoutube= async (req,res)=>{
    try {
        const {id}=req.params;

        const user=await User.findById(req.user._id);

        const trashYoutube=user.youtube.find((video)=> video._id== id);
        user.youtube=user.youtube.filter((video)=> video._id!=id);

        await cloudinary.v2.uploader.destroy(trashYoutube.image.public_id)
        
        await user.save();

        res.status(200).json({
            success:true,
            message:"Deleted from Youtube"
        })

        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
        
    }
}

export const deleteProject= async (req,res)=>{
    try {
        const {id}=req.params;

        const user=await User.findById(req.user._id);

        const trashProject=user.projects.find((item)=> item._id == id);
        // console.log("tProject:",trashProject.image.public_id);
        
        await cloudinary.v2.uploader.destroy(trashProject.image.public_id);
        
        user.projects=user.projects.filter((item)=> item._id !=id);

        
        await user.save();

        res.status(200).json({
            success:true,
            message:"Deleted form Project"
        })

        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
        
    }
}