import {Product} from '../odm/index.js'

export class Products {
    constructor(data) {
        this.data = data;
    }

    async getAllProducts() {
        try {
            const product = await Product.find({})
            return product
        } catch (e) {
            return {status: 404, message: e.message}
        }
    }

    async getOneProduct() {
        try {
            const product = await Product.findById(this.data)
            return product
        } catch (e) {
            return {status: 404, message: e.message}
        }
    }

    async removeProduct() {
        try{
            const product = await this.getOneProduct()
            await product.remove()
            return {status: 200}
        }catch (e) {
            return {status: 404, message: e.message}
        }
    }

    async createProduct() {
        const data = this.data;
        try {
            const product = await Product
            await product.create(data);
            const newProduct = await Product.findOne({name: data.name})
            return {status: 200, newProduct}
        } catch (e) {
            return {message: e.message}
        }
    }

    async updateProduct() {
        const data = this.data
        try{
            const product = await Product.findById(data.id)
            console.log(product)
            if (!product) {
                return {status: 401, message: "invalid credentials"}
            }
            product.name = data.name || product.name
            product.image = data.image || product.image
            product.description = data.description || product.image
            product.brand = data.brand || product.brand
            product.category = data.category || product.category
            product.price = data.price || product.price
            product.countInStock = data.countInStock || product.countInStock
            const updateProduct = await product.save()
            return{status: 200, updateProduct}
        }catch (e) {
            return {status: 400, message: e.message}
        }

    }
}
