import dg from 'debug'
import {Products} from "../../controllers/index.js";

const debug = dg('router:product')

export const getProducts = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try {
        const products = new Products()
        const data = await products.getAllProducts()
        console.log(data)
        if(data.status){
            res.status(data.status).json({message: data.message})
        }
        res.status(200).json(data)
    }catch (e) {
        res.status(400)
    }
}

export const getProduct = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try {
        const products = new Products(req.params.id)
        const data = await products.getProductsById()
        if(data.status){
            res.status(data.status).json({message: data.message})
        }
        console.log(data)
        res.status(200).json(data)
    }catch (e) {
        res.status(400)
    }
}

export const updateProduct = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try{
        const product = new Products(req.body).updateProduct()
        if(product.message){
            res.status(data.status).json({message: product.message})
        }
        res.status(200).json({message: "Update product", product})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

export const removeProduct = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try{
        const product = new Products(req.body.id).removeProduct()
        if(product.message){
            res.status(product.status).json({message: "Not users"})
        }
        res.status(200).json({message: "Product remove"})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

export const createProduct = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try{
        const newProduct = {
            ...req.body,
            user: req.user._id
        }
        const product = await new Products(newProduct).createProduct()
        if(product.message){
            res.status(product.status).json({message: "Not users"})
        }
        res.status(200).json({message: product})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

