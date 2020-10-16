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
        required: true,
        unique: true
    },
    email:{
        type: String,
        unique: true
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
    }, {timestamps: true})

module.exports = mongoose.model('Drivers', driverSchema)
