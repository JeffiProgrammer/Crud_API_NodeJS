import mongoose from "mongoose";

const connectToDB = async () => {
    await mongoose.connect(process.env.DB_URI).then((res) => {
        console.log("MONGODB SUCCESSFULLY CONNECTED");
    }); 
};


export default connectToDB;