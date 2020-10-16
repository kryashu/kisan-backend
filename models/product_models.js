const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    types: [
        {
            name: String,
            price: {
                type: Number,
                required: true
            }
        }
    ],
    img: {
        type: Buffer,
        contentType: String
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categories'
    }
}, {timestamps: true})

module.exports = new mongoose.model('Products', productSchema)
