const express=require('express');
const Product=require('../models/product');

const router=express.Router();

// for getting all products
router.get('/', async (req, res)=> 
{
  try 
  {
    // getting product list from db
    const products = await Product.find();
    res.json(products);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete product by Id
router.delete('/:id',async(req,res)=> 
{
  try
  {
    const product=await Product.findById(req.params.id);
    if(!product)
      {
        return res.status(404).json({message:'Product not available'});
      }
      await product.remove();
      res.status(204).json({message:'Product removed'});
  } 
  catch(error) 
  {
    res.status(500).json({message: error.message});
  }
});

module.exports=router;
