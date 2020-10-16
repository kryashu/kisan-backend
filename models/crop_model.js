const mongoose = require('mongoose')

const cropSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: [{
        query: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }],
    img: {
        data: Buffer,
        contentType: String
    },
    problem: [{
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Problems'
    }]
})

module.exports = mongoose.model('Crops', cropSchema)
