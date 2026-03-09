const mongoose = require('mongoose');   

const productSchema = new mongoose.Schema({
    name:  {
        type : String,
        required : [true, 'Product name is required'],
        trim :true  
    },
    price: {
        type : Number,
        required : [true, 'Product price is required'],
        min : [0, 'Price must be a positive number']
    },
    description:{
        type : String,
        required : [true, 'Product description is required'],
        trim :true
    },
    stock: {
        type : Number,
        required : [true, 'Product stock is required'],
        min : [0, 'Stock must be a positive number']
    },
    category: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : [true, 'Product category is required']
    }
},{timestamps : true , versionKey : false});
  
module.exports = mongoose.model('Product', productSchema);