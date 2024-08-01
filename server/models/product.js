const mongoose=require('mongoose');
const { schema } = require('./order');

//product schema
const productSchema=new mongoose.Schema({
  name:{type:String,required:true},
  description:{type:String,required:true},
  price:{type:Number,required:true},
  category:{type:String,required:true},
  stock:{type:Number,required:true},
  imageUrl:{type:String,required:true}
});

module.exports=mongoose.model('Product',productSchema);
