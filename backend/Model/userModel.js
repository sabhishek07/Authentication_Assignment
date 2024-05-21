import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']

    },
    password:{
        type:String,
        required:true
    },
    phone_Number:{
        type:Number,
        required:true,
        unique:true,
        match: [
            /^\+?[1-9]\d{1,14}$/, // validation phone numbers
            'Please enter a valid phone number'
        ]

    },
    Address:{
        type:String,
        required:true
    }


},{timestamps:true})

export const User=mongoose.model('User',UserSchema);