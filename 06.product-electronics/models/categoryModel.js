const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    name:  {
        type : String,
        required : [true, 'Category name is required'],
        trim :true  
    },
    description:{
        type : String,
        required : [true, 'Category description is required'],
        trim :true
    }
},{timestamps : true , versionKey : false});
  

module.exports = mongoose.model('Category', categorySchema);