//Core
import express from 'express'

//Helpers
import {authenticate, limiter, validator, admin} from "../../helpers/index.js";
import {addOrderItems, getAdminAllOrder, getAllOrder, getOrder} from "./route.js";
//Schema


const router = express.Router()


router.get('/all', [authenticate, admin], getAdminAllOrder)
router.get('/:id', [authenticate], getOrder)
router.post('/', [authenticate], addOrderItems)
router.get('/',[authenticate], getAllOrder)


export {router as order}
