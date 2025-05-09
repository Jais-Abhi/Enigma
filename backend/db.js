const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://kumarguptaraj825:vuQjATWPtfvgo0wP@cluster0.dp6h28k.mongodb.net/Enigmadb?retryWrites=true&w=majority&appName=Cluster0',
           
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1); // exit process with failure
    }
};

module.exports = connectDB;
