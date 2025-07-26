import mongoose from "mongoose";

const hotelSchema=new mongoose.Schema(

    {
        hotelName:{
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
hellllllllllllllllllllllllll
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhdevdvdggbbgb
export const Hotel=mongoose.model("Hotel",hotelSchema);