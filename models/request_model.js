const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    crop: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Crops'
    },
    quantity: {
        type: Number,
        required: true
    },
    expectedPrice: {
        type: mongoose.SchemaTypes.Decimal128,
        required: true
    },
    sell: {
        type: Boolean,
        required: true
    },
    targetAddress: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Addresses'
    },
    requestBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users'
    },
    assignedDriver: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Drivers'
    },
    deliveryDate: {
        type: Date
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Requests', requestSchema)
