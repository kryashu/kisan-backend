const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        default: Date.now()
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    vehicle: {
        type: String,
        required: true
    },
    aadharFront: {
        data: Buffer,
        contentType: String,
        required: true
    },
    aadharBack: {
        data: Buffer,
        contentType: String,
        required: true
    },
    vehicleImage: {
        data: Buffer,
        contentType: String,
        required: true
    },
    assignedOrder: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Orders'
        }
    ],
    assignedRequests: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Requests'
        }
    ]
    })

module.exports = mongoose.model('Drivers', driverSchema)
