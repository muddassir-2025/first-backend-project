import mongoose from "mongoose";


const connectDB= async ()=>{
  try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`\n mongoDB CONNECTED!! \n DB HOST : ${connectionInstance.connection.host}`)
    
  } catch (error) {
    console.log("MONGO DB ERROR!! ", error);
    process.exit(1) //error
    
  }
}

export default connectDB