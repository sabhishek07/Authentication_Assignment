import express from 'express';
import { comparePassword, hashingfunction } from '../Helper/userHelper.js';
import { User } from '../Model/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const RegisterController=async(req,res)=>{
    try {
        const{name,email,password,phone_Number,Address}=req.body;
        if(!name || !email || !password || !phone_Number || !Address){
            return res.status(400).send({
                success:false,
                message:"All Fields Required"
            })
        }

        const userCheck=await User.findOne({email})
        if(userCheck){
            return res.status(200).send({
                success:false,
                message:"User Already Registered"
            })
        }
        const passwordfinal=await hashingfunction(password);

        const userdetails=await new User({name,email,password:passwordfinal,Address,phone_Number}).save();

        res.status(201).send({
            success:true,
            message:"User Registration Successfully",
            userdetails
        })



        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in registration"
        })
        
    }

}

//login functionality

export const LoginController=async(req,res)=>{
    try {
    
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Please Fill All Fields"
            })
        } 
        const checkloginuser=await User.findOne({email})
    
        if(!checkloginuser){
            return res.status(200).send({
                success:false,
                message:"Invalid User"
            })
    
        }
        const hashedpassword=checkloginuser.password
        const passwordCheck=await comparePassword(password,hashedpassword);
    
        if(!passwordCheck){
            return res.status(200).send({
                success:false,
                message:"Invalid User"
    
            })
        }
    
       const token=jwt.sign({id:checkloginuser._id},process.env.jwttoken,{expiresIn:'2d'})
    
        return  res.status(201).send({
            success:true,
            message:"Login Successfully",
            checkloginuser,
            token
    
        })
         
    
    
        
    } catch (error) {
        
    }
         
    }
    
    //protected route  
    export const UserdasboardController=async(req,res)=>{
        try {
            
            return res.status(201).send({
                success:true,
                message:"Welcome"
            })
            
        } catch (error) {
            console.log(error)
            
        }
    
    
    }

    //update_profile_controller

    export const Profile_Update_Controller=async(req,res)=>{
        try {
            const{name,Address}=req.body;
            const{id}=req.params;
    
            const User_Update_Profile=await User.findByIdAndUpdate(id,{name,Address},{new:true})
    
            return res.status(200).send({
                success:true,
                message:"Profile Update Successfully",
                User_Update_Profile
            })
    
            
        } catch (error) {
            return res.status(500).send({
                success:false,
                message:"Something Went wrong"
            })
    
            
            
        }
    }

    //delete profile

    export const Delete_Profile=async(req,res)=>{
        try {
            const {id}=req.params;
           const Delete_Profile_User= await User.findByIdAndDelete(id)
    
           if(!Delete_Profile_User){
            return res.status(200).send({
                success:false,
                message:"No User Found"
           })
           }
           return res.status(201).send({
            success:true,
            message:"User deleted"
           })
    
        } catch (error) {
    
            return res.status(500).send({
                success:false,
                message:"Error In System"
            })
            
        }
    }
    