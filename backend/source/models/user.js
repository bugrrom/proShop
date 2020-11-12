import {User} from '../odm/index.js'
import bcrypt from 'bcryptjs'

export class Users {
    constructor(data) {
        this.data = data;
    }

    async getUserByLogin(email) {
        try {
            const user = await User.findOne({email})
            return user

        } catch (e) {
            return {message: e.message}
        }
    }

    async getUserById() {
        try {
            const user = await User.findById(this.data)
            return user
        } catch (e) {
            return {status: 404, message: e.message}
        }
    }

    async getAllUsers () {
        try {
            const user = await User.find()
            return user
        } catch (e) {
            return {status: 404, message: e.message}
        }
    }

    async removeUser() {
        try {

            const user = await this.getUserById()
            await user.remove()
            return user
        }catch (e) {
            return {status: 404, message: e.message}
        }
    }

    async login() {
        const {email, password} = this.data;
        try {
            const data = await this.getUserByLogin(email)
            if (!data) {
                return {
                    message: 'invalid credentials',
                    status: 400
                }
            }
            const passwordCheck = bcrypt.compareSync(password, data.password);
            if (!passwordCheck) {
                return {
                    message: 'invalid credentials',
                    status: 401
                }
            }
            return {
                email,
                _id: data._id,
                name: data.name,
                isAdmin: data.isAdmin,
            }
        } catch (e) {
            return {
                message: 'invalid credentials',
                status: 401
            }
        }

    }

    async updateUser() {
        const data = this.data
        try {
            const checkUser = await User.findById(data._id)
            if (!checkUser) {
                return {status: 401, message: "invalid credentials"}
            }
            checkUser.name = data.name || checkUser.name,
            checkUser.email = data.email || checkUser.email
            if (data.password) {
                checkUser.password = await bcrypt.hash(data.password, 11)
            }
            const updateUser = await checkUser.save()
            return {
                email: updateUser.email,
                name: updateUser.name,
                _id: updateUser._id,
                isAdmin: updateUser.isAdmin,
            }
        } catch (e) {
            return {message: e.message}
        }
    }

    async createNewUser() {
        const data = this.data;
        try {
            const checkUser = await this.getUserByLogin(data.email)
            if (checkUser) {
                return {status: 401, message: "Email exist"}
            }
            const user = await this._transformCreateUser(data)
            await User.create(user);
            const newUser = await this.getUserByLogin(user.email)
            return {
                email: newUser.email,
                name: newUser.name,
                _id: newUser._id,
                isAdmin: newUser.isAdmin
            }
        } catch (e) {
            return {message: e.message}
        }
    }

    async _transformCreateUser(data) {
        const {name, email, password} = data;
        const hashedPassword = await bcrypt.hash(password, 11);
        const user = {
            name,
            email,
            password: hashedPassword,
        };

        return user;
    }
}
