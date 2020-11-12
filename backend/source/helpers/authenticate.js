// Instruments
import {getPassword} from './index.js';
import jwt from 'jsonwebtoken'
import {Users} from "../controllers/index.js";

export const authenticate = async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Basic')) {
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, getPassword())
            const user =  await new Users(decoded.id).getUserById()
            if(user.message){
                res.status(user.status).json({message: user.message})
            }
            req.user = {
                email: user.email,
                name: user.name,
                _id: user._id,
                isAdmin: user.isAdmin,

            }
            next()
        }catch (e) {
            res.status(401).json({message: e.message})
        }
    }
    if(!token) {
        res.status(401).json({message: 'Not authorized, no token'})
    }
};
