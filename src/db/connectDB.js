import mongoose from "mongoose";

const ConnectDB = async() => {
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connect Successfully");
}
catch(error){
    console.log("Error to connect",error.message);
}
}

export default ConnectDB;