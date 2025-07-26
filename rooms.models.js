import mongoose from "mongoose"

const roomSchema=new mongoose.Schema(
    {
        Id:{
            type:Number,
            required:true,
            unique:true
        },
        hotel:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hotel',
            required:true
        },
        facilities:{
            type:String,
            enum:['Deluxe',"Super Deluxe","Basic","Luxury","Royale"],
            default:'Basic'
        },
        cost:{
            type:Number,
            required:true,
            default:0
        }
    },
    {timestamps:true}
)

export const Room=mongoose.model("Room",roomSchema);