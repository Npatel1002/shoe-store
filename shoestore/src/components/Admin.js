import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        imageUrl: '',
    });
    const [categoryForm, setCategoryForm] = useState({
        categoryName: ''
    });

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleCategoryInputChange = (e) => {
        const { name, value } = e.target;
        setCategoryForm({ ...categoryForm, [name]: value });
    };

    const handleCreateProduct = async () => {
        try {
            await axios.post('http://localhost:4000/api/products', form);
            fetchProducts();
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    const handleCreateCategory = async () => {
        try {
            await axios.post('http://localhost:4000/api/categories', categoryForm);
            fetchCategories();
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete('http://localhost:4000/api/products/${id}');
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleDeleteCategory = async (id) => {
        try {
            await axios.delete('http://localhost:4000/api/categories/${id}');
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <div className="container admin-container">
            <h2 className="text-center">Admin Dashboard</h2>
            
            <h3>Create Product</h3>
            <div className="form-group">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleInputChange} className="form-control" />
                <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleInputChange} className="form-control" />
                <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleInputChange} className="form-control" />
                <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleInputChange} className="form-control" />
                <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleInputChange} className="form-control" />
                <input type="text" name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleInputChange} className="form-control" />
                <button onClick={handleCreateProduct} className="btn btn-primary mt-3">Add Product</button>
            </div>

            <h3>Products</h3>
            <ul className="list-group mt-3">
                {products.map((product) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={product._id}>
                        {product.name}
                        <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger btn-sm">Delete</button>
                    </li>
                ))}
            </ul>

            <h3 className="mt-5">Create Category</h3>
            <div className="form-group">
                <input
                    type="text"
                    name="categoryName"
                    placeholder="Category Name"
                    value={categoryForm.categoryName}
                    onChange={handleCategoryInputChange}
                    className="form-control"
                />
                <button onClick={handleCreateCategory} className="btn btn-primary mt-3">Add Category</button>
            </div>

            <h3>Categories</h3>
            <ul className="list-group mt-3">
                {categories.map((category) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={category._id}>
                        {category.name}
                        <button onClick={() => handleDeleteCategory(category._id)} className="btn btn-danger btn-sm">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;