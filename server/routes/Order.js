const express=require('express');
const Order=require('../models/order');

const router=express.Router();

// create new order
router.post('/', async(req,res)=>
{
    
    const order=new Order(req.body);
    try
    {
        // save order in db
        const newOrder=await order.save();
        res.status(201).json(newOrder);
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }
});

module.exports=router;
