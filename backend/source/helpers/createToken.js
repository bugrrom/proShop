import jwt from 'jsonwebtoken'
import {getPassword} from "./index.js";

export const createToken = (id) => {
    return jwt.sign({id}, getPassword(), {expiresIn: '8d'})
}
