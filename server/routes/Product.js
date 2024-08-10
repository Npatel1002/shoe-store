const express=require('express');
const router=express.Router();
const Product=require('../models/product');

// Get all products
router.get('/',async(req,res)=>{
    try 
    {
      const products=await Product.find();
      res.json(products);
    } 
    catch(error)
     {
      res.status(500).json({message:error.message});
    }
});

// Create a new product
router.post('/',async(req,res)=>{
    const{name,description,price,category,stock,imageUrl}=req.body;

    // Validate all required fields
    if(!name || !description || !price || !category || !stock || !imageUrl)
      {
        return res.status(400).json({message:'Need to fill all required fields to place order!!!'});
      }

    const product = new Product(req.body);
    try 
    {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } 
    catch(error) 
    {
      res.status(400).json({message:error.message});
    }
});

// Product.js (Routes)
router.delete('/:id', async(req,res)=>{
    try 
    {
        const product = await Product.findById(req.params.id);
        if (!product)
        {
          return res.status(404).json({message:'Product not found....' });
        }
        await product.remove();
        res.status(204).json({message:'Removed product successfully!!!!' });
    } catch(error) 
    {
      res.status(500).json({message:error.message});
    }
});

// DELETE a product by ID
router.delete('/:id',async(req,res)=>{
  try 
  {
    const product=await Product.findByIdAndDelete(req.params.id);
    if(!product) 
      {
        return res.status(404).json({message:'Product not found'});
      }
      res.status(200).json({message:'Product deleted successfully!!!!'});
  } 
  catch(error) 
  {
    res.status(500).json({message:'Server error',error});
  }
});

module.exports=router;