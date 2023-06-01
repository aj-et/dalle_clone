import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true); //Useful for search functionality

    // Connect database
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;