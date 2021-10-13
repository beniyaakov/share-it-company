const userModel = require('../Model/userModel') 

const UpdateUser =  (req, res) => {
    const field = {}
    field[req.body.field] = req.body.newValue
    try {
        userModel.findByIdAndUpdate(req.body.id, { $set: field }, { new: true }, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }

}
const deleteUser =  (req, res) => {
    try {
        userModel.findByIdAndDelete(req.body.id, { new: true }, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }

}
const getAllUsers =  (req, res) => {
    try {
        userModel.find({}, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }
}
const getUserById =  (req, res) => {
    try {
        userModel.findById(req.params.id, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "failed", error: error.message })
    }
}

const userFavorites = async(req, res) => {
    console.log();
    try {
        let post = await 1
        const user = await userModel.findById(req.body.userId);
        console.log(user); 
        userModel.findById({_id:req.params.id, posts:{$elemMatch:{_id:req.body.id}}}, async (error, result)=>{
            if(error) throw error;
            post = await result.posts.filter(obj=> obj.id === req.body.id );
            console.log(post);
            user.favorites.push(post);
            user.save();
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
    getUserById,
    userFavorites
}