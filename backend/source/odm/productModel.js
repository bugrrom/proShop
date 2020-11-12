import mongoose from 'mongoose'
const {Schema, model} = mongoose

const reviewsSchema = Schema({
    name: {type: String, required: true},
    rating: {type: String, required: true},
    comment: {type: String, required: true}
},{
    timestamps: true
})

const productSchema = Schema({
    user: {
        type: Schema.Types.ObjectID,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewsSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

export const Product = model('Product', productSchema)

