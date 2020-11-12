import {Order} from '../odm/index.js'

export class Orders {
    constructor(data) {
        this.data = data;
    }

    async getOrderById () {
        const data = this.data
        try{
            const order = await Order.findById(data)
            return order
        }catch (e) {
            return {
                status: 404,
                message: e.message
            }
        }
    }

    async getAllOrder () {
        const data = this.data
        try{
            const order = await Order.find({user: data})
            return order
        }catch (e) {
            return {
                status: 404,
                message: e.message
            }
        }
    }

    async getAdminAllOrder () {
        try{
            const order = await Order.find({})
            return order
        }catch (e) {
            return {
                status: 404,
                message: e.message
            }
        }
    }

    async addNewOrder() {
        const data = this.data
        try{
            const newOrder = await new Order(data).save()
            return newOrder
        }catch (e) {
            return {
                status: 401,
                message: e.message
            }
        }
    }
}
