const Usermodel = require('../Model/userModel')


const UpdateUser =  (req, res) => {
    const field = {}
    field[req.body.field] = req.body.newValue
    try {
        Usermodel.findByIdAndUpdate(req.body.id, { $set: field }, { new: true }, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }

}
const deleteUser =  (req, res) => {
    try {
        Usermodel.findByIdAndDelete(req.body.id, { new: true }, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }

}
const getAllUsers =  (req, res) => {
    try {
        Usermodel.find({}, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }
}
const getUserById =  (req, res) => {
    try {
        Usermodel.findById(req.params.id, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }
}
module.exports = {
    UpdateUser,
    deleteUser,
    getAllUsers,
    getUserById
}