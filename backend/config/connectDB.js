import mongoose from "mongoose";

const connectDB=async()=>{
    // console.log("MONGO URI:", JSON.stringify(process.env.MONGODB_URI));


    // mongoose.connection.on("connected",()=>{
    //     console.log("DB connected");
        
    // })
    await mongoose.connect(`${process.env.MONGODB_URI}/food-app`).then(()=>{
        console.log("DB connected");
        
    })
}

export default connectDB