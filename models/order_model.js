const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products: [
        {
            type: mongoose.SchemaTypes.ObjectID,
            ref: 'Products'
        }
    ],
    orderedBy: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Users'
    },
    date: {
        type: Date,
        default: Date.now()
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
    }
})

module.exports = mongoose.model('Orders', orderSchema)
