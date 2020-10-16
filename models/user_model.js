const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        default: Date.now()
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    addresses: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Addresses'
        }
    ],
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Orders'
        }
    ],
    requests: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Requests'
    }]
}, {timestamps: true})

module.exports = mongoose.model('Users', userSchema)
