
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js' //when import files, add .js
 
dotenv.config();

//initialize express
const app = express();

//function to get the required and response and take the response object and send "api is running", then run npm start and go to localhost:5000
app.get('/', (req, res) => {
    res.send('API is running...')
})

//route to get all products from products.js file
app.get('/api/products', (req, res) => {
    //route the products - go to backend/products.js
    res.json(products)
})

//route to get a single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

//setting up the port 
const PORT = process.env.PORT || 5000 //refer to env file that has environt variables 

//5000 is replaced with PORT
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
    );

