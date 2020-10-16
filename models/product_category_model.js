const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: {
      type: String,
      default: ''
    },
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Products'
    }]
})

module.exports = mongoose.model('Categories', categorySchema)
