import mongoose from "mongoose";
const connectDB = async ()=>{
    try{
        //console.log(process.env.test);
       await mongoose.connect(process.env.MONGO);
       console.log("MongoDB is connected")
    }
    catch(err){
        console.log("Error while setting up the DB\n",err);
    }
}

export default connectDB