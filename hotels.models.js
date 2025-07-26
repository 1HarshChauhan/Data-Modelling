import mongoose from "mongoose";

const hotelSchema=new mongoose.Schema(

    {
        name:{
            type:String,
            required:true,
        },
        year:{
            type:Number,
            required:true
        },
        noOfRooms:{
            type:Number,
            default:0
        }
    },
    {timestamps:true}
)

export const Hotel=mongoose.model("Hotel",hotelSchema);