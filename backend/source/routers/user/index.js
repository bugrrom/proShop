//Core
import express from 'express'
import {
    createUser,
    Login,
    getUserProfile,
    updateUserProfile,
    getAllUsers,
    removeUser,
    updateEditProfileById, getUserById
} from "./route.js";

//Helpers
import {authenticate, limiter, validator, admin} from "../../helpers/index.js";
//Schema
import {createUsers, login} from "../../schema/index.js";

const router = express.Router()

router.post('/create',[validator(createUsers)], createUser)
router.post('/login', [validator(login)], Login)
router.get('/profile',[authenticate], getUserProfile)
router.put('/updateUser',[authenticate, limiter(1000,1000*3)], updateUserProfile)
router.get('/users',[authenticate, admin], getAllUsers)
router.get('/:id',[authenticate, admin], getUserById)
router.delete('/remove',[authenticate, admin], removeUser)
router.put('/updateUser/:id',[authenticate, admin], updateEditProfileById)

export {router as user}
