const UserModel = require('../Model/userModel')


const addPost = async (req, res) => {
    const { content, id } = req.body
    try {
        const userName = await UserModel.findById(id);
        const post = {
            userName: `${userName.firstName} ${userName.lastName}`,
            content: content
        }
        UserModel.findByIdAndUpdate(id, { $addToSet: { posts: post } }, { new: true }, (err, result) => {
            if (err) throw err
            res.status(200).json({ message: "success", data: result })
        })
    } catch (error) {
        res.status(400).json({ message: "faild", error: error.message })
    }

}
const deletePost = async (req, res) => {
    const { UserId, PostId } = req.body
    try {

        UserModel.findByIdAndUpdate(UserId,
            { $pull: { posts: { _id: PostId } } }, { new: true }, (err, result) => {
                if (err) throw err
                res.status(200).json({ message: "success", data: result })
            })
    } catch (error) {
        res.status(400).json({ message: "faild", error: error.message })
    }

}
const UpdatePost = async (req, res) => {
    const { UserId, PostId } = req.body
    try {
        const postPath = `posts.$[object].content`
        const newPost = {}
        newPost[postPath] = await req.body.newcontent
        UserModel.findByIdAndUpdate(UserId,
            { $set: newPost },
            {
                arrayFilters: [{ "object._id": { _id: PostId } }],
                new: true
            }, (err, result) => {
                if (err) throw err
                res.status(200).json({ message: "success", data: result })
            })
    } catch (error) {
        res.status(400).json({ message: "faild", error: error.message })
    }

}
const addComment = async (req, res) => {
    const { UserId, PostId,comment } = req.body
    try {
        const userName = await UserModel.findById(UserId);
        const postPath = `posts.$[object].comments` 
        const newPost = {}
        newPost[postPath] = await {
            userName: `${userName.firstName} ${userName.lastName}`,
            comment: comment
        }
        console.log(newPost)
        UserModel.findByIdAndUpdate(UserId,
            { $addToSet: newPost },
            {
                arrayFilters: [{ "object._id": { _id: PostId } }],
                new: true
            }, (err, result) => {
                if (err) throw err
                console.log(newPost)
                res.status(200).json({ message: "success", data: result })
            })
    } catch (error) {
        res.status(400).json({ message: "faild", error: error.message })
    }

}
// const deleteComment = async (req, res) => {
//     const { UserId, PostId, } = req.body
//     try {
//         const userName = await UserModel.findById(UserId);
//         const postPath = `posts.$[object].comments` 
//         const newPost = {}
//         newPost[postPath] = await {
//         }
//         console.log(newPost)
//         UserModel.findByIdAndUpdate(UserId,
//             { $pull: newPost },
//             {
//                 arrayFilters: [{ "object._id": { _id: PostId } }],
//                 new: true
//             }, (err, result) => {
//                 if (err) throw err
//                 console.log(newPost)
//                 res.status(200).json({ message: "success", data: result })
//             })
//     } catch (error) {
//         res.status(400).json({ message: "faild", error: error.message })
//     }

// }
module.exports = {
    addPost,
    deletePost,
    UpdatePost,
    addComment
}