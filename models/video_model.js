const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    vid: {
        type: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model('Videos', videoSchema)
