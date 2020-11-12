import {Orders as OrderModel} from '../models/index.js'

export class Orders {
    constructor(data) {
        this.models = {
            order: new OrderModel(data)
        }
    }

    async getOrderById() {
        const data = await this.models.order.getOrderById()
        return data
    }

    async addNewOrder() {
        const data = await this.models.order.addNewOrder()
        return data
    }

    async getAllOrder () {
        const data = await this.models.order.getAllOrder()
        return data
    }

    async getAdminAllOrder () {
        const data = await this.models.order.getAdminAllOrder()
        return data
    }
}
