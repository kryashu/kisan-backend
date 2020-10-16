const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    productList: [{
        product: {
            type: mongoose.SchemaTypes.ObjectID,
            ref: 'Products'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }
    ],
    orderedBy: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Users'
    },
    total: {
        type: mongoose.SchemaTypes.Decimal128,
        required: true
    },
    discount: {
        type: mongoose.SchemaTypes.Decimal128,
        default: 0.00
    },
    assignedDriver: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Drivers'
    },
    deliveryAddress: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Addresses'
    },
    deliveryDate: {
        type: Date
    }
}, {timestamps: true})

module.exports = mongoose.model('Orders', orderSchema)
