//Core
import express from 'express'
import {createProduct, getProduct, getProducts, removeProduct, updateProduct} from "./route.js";

//Helpers
import {authenticate, admin} from "../../helpers/index.js";
//Schema

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/create',[authenticate, admin], createProduct)
router.delete('/remove',[authenticate, admin], removeProduct)
router.put('/update',[authenticate, admin], updateProduct)

export {router as product}
