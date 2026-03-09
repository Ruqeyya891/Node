const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL.replace('<db_password>', process.env.PASSWORD));
        console.log('Successfully Connected to MongoDB');
    } catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;