const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new product
router.post('/', async (req, res) => {
    const { name, description, price, category, stock, imageUrl } = req.body;

    // Validate all required fields
    if (!name || !description || !price || !category || !stock || !imageUrl) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Product.js (Routes)
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.remove();
        res.status(204).json({ message: 'Product removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;