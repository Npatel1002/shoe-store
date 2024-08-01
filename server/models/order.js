const mongoose=require('mongoose');

// order schema
const orderSchema=new mongoose.Schema({
    products: [
        {
            // product ordered
            quantity:
            {type:Number,required: true },
            productId:
            {type:mongoose.Schema.Types.ObjectId,ref: 'Product',required:true}
        }
    ],
    // odrered placed 
    orderDate:{type:Date,default:Date.now},
    totalPrice:{type:Number,required:true } // total amount
});

module.exports =mongoose.model('Order',orderSchema);
