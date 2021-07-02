import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

//@desc Fetch all products
//@route GET /api/products
//@access Public

router.get('/', asyncHandler (async (req, res) => {
    const products = await Product.find({})  //empty object that returns everything
    res.json(products)
}))

//@desc Fetch single  products
//@route GET /api/product/:id
//@access Public

router.get(
    '/:id', 
    asyncHandler (async (req, res) => {
        const product = await Product.findById(req.params.id)
    
        if(product) { 
            res.json(product)
        } else {
            //in postman api/products/:id if there is an error in the product id, error message, "product not found" will display 
        res.status(404)
        throw new Error('Product not found')
        }
    })
    )

export default router