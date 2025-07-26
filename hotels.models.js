import mongoose from "mongoose";

const hotelSchema=new mongoose.Schema(

    {
        name:{
            type:String,
            required:true,
        },
        years:{
            type:Number
        },
        noOfRooms:{
            type:Number,
            default:0
        }
    },
    {timestamps:true}
)
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhdevdvdggbbgb
export const Hotel=mongoose.model("Hotel",hotelSchema);