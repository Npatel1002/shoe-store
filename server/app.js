const express=require('express');
const mongoose=require('mongoose');
const productRoutes=require('./routes/Product');
const orderRoutes=require('./routes/Order');
const cors=require('cors'); // share data between websites
const categoryRoutes=require('./routes/Category');

const app=express();
const port=4000;
const database='mongodb+srv://patelneel:EfLvJEW7GsyFLvY8@api.r931jr3.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=API';
mongoose.connect(database,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> 
        {
            console.log('Mongodb Connection Established');
            app.listen(port, () => {
                console.log(`Server is running on ${port}`);
        });
    })
    .catch((error)=>console.error('Mongodb connection not Established:',error));
    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use('/api/products', productRoutes);
    app.use('/api/orders', orderRoutes);
    app.use('/api/categories', categoryRoutes);
    app.get('/', (req, res) => {
    res.send('Welcome to the shoe store Collection API');
});

module.exports=app;
