const users = require('../models/user_model')
const jwt = require('../configs/jwtConfig')

module.exports = {
    create: async (req, res) => {
        const data = req.body
        const userData = new users({
            name: data.name,
            dob: data.dob,
            phone: data.phone,
            email: data.email
        })
        try {
            const emailCheck = await users.find({email: data.email})
            const phoneCheck = await users.find({phone: data.phone})
            if (emailCheck.length !== 0) {
                res.status(400).json({status: 400, message: 'Email is already in use'})
            } else if (phoneCheck.length !== 0) {
                res.status(400).json({status: 400, message: 'Phone Number is already in use'})
            } else {
                await userData.save();
                res.status(200).json({status: 200, message: 'Signup Successfully'})
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({status: 500, message: 'An error occurred'})
        }
    },
    edit: async (req, res) => {
        const data = req.body
        const token = req.get('Authorization')
        const tokenData = jwt.verifyToken(token)
        const userById = users.findById(mongoose.mongo.ObjectId(tokenData.id))
        const keys = Object.keys(data)
        for (let key of keys) {
            userById[key] = data[key]
        }
        try {
            await userById.save()
            res.status(200).json({status: 200, message: 'User updated successfully'})
        } catch (err) {
            console.log(err)
            res.status(500).json({status: 500, message: 'An error occurred'})
        }
    }
}
