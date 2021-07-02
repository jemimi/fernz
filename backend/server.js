import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'  //need to add .js since working in the backend
import { notFound, errorHandler  } from './middleware/errorMIddleware.js'
import productRoutes from './routes/productRoutes.js'
//import { restart } from 'nodemon'
 
dotenv.config()

//calling the connectDB 
connectDB()

//initialize express
const app = express();



//function to get the required and response and take the response object and send "api is running", then run npm start and go to localhost:5000
app.get('/', (req, res) => {
    res.send('API is running...')
})



/* //****route to get all products from products.js file - this is retrieving the json data

//route the products - go to backend/data/products.js
app.get('/api/products', (req, res) => {
    res.json(products)
})

//route to get a single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})
 */

//get products from the product Routes file which is connected to the mongoDB
app.use('/api/products', productRoutes);

/*  MOVE to middleware/errorMiddleware.js 

    app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}) */

/* app.use((err, req, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null: err.stack,
    })
}) */

//setting up the port 
const PORT = process.env.PORT || 5000 //refer to env file that has environt variables 

//passing in notFound & errorHandler from errorMiddleware.js
app.use(notFound)
app.use(errorHandler)


//5000 is replaced with PORT
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    );


