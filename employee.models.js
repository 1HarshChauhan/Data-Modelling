import mongoose from "mongoose";

const experienceSchema=new mongoose.Schema(
    {
        hotel:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hotel',
            required:true
        },
        joiningDate:{
            type:Date,
            required:true
        },
        leaveDate:{
            type:Date,
            required:true
        },
        Performance:{
            type:Number,
            default:0,
            min:0,
            max:10
        }

    }
)

const employeeSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        hotelWorking:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hotel',
            required:false
        },
        experience:[experienceSchema]

    },
    {timestamps:true}
)

export const Employee=mongoose.model("Employee",employeeSchema)