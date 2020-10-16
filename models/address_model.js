const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    postalCode: {
        type: Number,
        default: 0
    },
    location: {
        type: pointSchema,
        required: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users'
    }
})

module.exports = mongoose.model('Addresses', addressSchema)
