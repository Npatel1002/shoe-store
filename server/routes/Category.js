const express=require('express');
const router=express.Router();
const Category=require('../models/Category');


// Get all categories
router.get('/',async(req,res)=>{
    try
    {
        const categories=await Category.find();
        res.json(categories);
    } 
    catch(error) 
    {
        res.status(500).json({message:error.message});
    }
});

// Create a new category
router.post('/',async(req,res)=>
    {
        const category=new Category(req.body);
        try
        {
            const newCategory=await category.save();
            res.status(201).json(newCategory);
        }
        catch(error) 
        {
            res.status(400).json({message:error.message});
        }
});


// Delete a category by ID
router.delete('/:id',async(req,res)=>{
    try 
    {
        const category=await Category.findById(req.params.id);
        if(!category)
            {
                return res.status(404).json({message:'Category not found....'});
            }
            await category.remove();
            res.status(204).json({message:'Deleted category successfully!!!'});
        } 
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
});

module.exports = router;