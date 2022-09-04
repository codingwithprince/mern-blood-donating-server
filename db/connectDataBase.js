import mongoose from "mongoose";

const connectDataBase = async(url) => {
    try {
        await mongoose.connect(url)
        console.log('Mongo connected..');
    } catch (error) {
        console.log(error);
    }
}

export default connectDataBase;