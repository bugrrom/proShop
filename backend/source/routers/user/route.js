import dg from 'debug'
import {Users} from "../../controllers/index.js";
import {createToken} from "../../helpers/index.js";

const debug = dg('router:product')


export const createUser = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try {
        const data = await new Users(req.body).createNewUser()
        if (data.message) {
            res.status(data.status).json({message: data.message})
        }
        res.status(200).json({...data})
    } catch (e) {

    }
}


export const Login = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)

    try {
        const user = await new Users(req.body).getLogin()
        if (user.message) {
            res.status(user.status).json({message: user.message})
        }
        const token = createToken(user._id)
        res.status(200).json({
            email: user.email,
            name: user.name,
            _id: user._id,
            isAdmin: user.isAdmin,
            token
        })
    } catch (e) {
        res.status(401)
    }
}

export const getUserProfile = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)
    try {
        res.status(200).json(req.user)
    } catch (e) {
        res.status(401).json({message: e.message})
    }
}

export const updateUserProfile = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)
    try {
        const data = {
            _id: req.user._id,
            ...req.body
        }
        const updateUser = await new Users(data).updateUser()
        const token = createToken(updateUser._id)
        res.status(201).json({
            ...updateUser,
            token
        })
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const removeUser = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)
    try{
        const user = new Users(req.body.id).removeUser()
        if(user.message){
            res.status(404).json({message: "Not users"})
        }
        res.status(200).json({message: "User remove"})
    }catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const updateEditProfileById = async (req, res) => {
    try {
        const data = {
            _id: req.params.id,
            ...req.body
        }
        const user = await new Users(data).updateUser()
        if(user.message){
            res.status(404).json({message: user.message})
        }
        res.status(200).json({message: user})
    }catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await new Users(req.params.id).getUserById()
        if(user.message){
            res.status(404).json({message: user.message})
        }
        res.status(200).json({
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin
        })
    }catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const getAllUsers = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`)
    try {
        const users =await new Users().getAllUsers()
        if(users.message){
            res.status(404).json({message: "Not users"})
        }
        res.status(200).json(users)
    }catch (e) {
        res.status(404).json({message: e.message})
    }
}
