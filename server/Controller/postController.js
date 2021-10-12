const UserModel = require('../Model/userModel')


const addPost = async (req, res) => {
    const { content, id, title } = req.body
    try {
        const userName = await UserModel.findById(id);
        const post = {
            userName: `${userName.firstName} ${userName.lastName}`,
            content: content,
            title: title
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
    const { UserId, PostId, comment } = req.body
    try {
        const userName = await UserModel.findById(UserId);
        const postPath = `posts.$[object].comments`
        const newPost = {}
        newPost[postPath] = await {
            userName: `${userName.firstName} ${userName.lastName}`,
            comment: comment
        }
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
const deleteComment = async (req, res) => {
    const { UserId, PostId, commentId } = req.body
    try {
        const postPath = `posts.$[object].comments`
        const newPost = {}
        newPost[postPath] = await { _id: commentId }
        UserModel.findByIdAndUpdate(UserId,
            { $pull: newPost },
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
const editComment = async (req, res) => {
    const { UserId, PostId, commentId, newComment } = req.body
    try {
        const postPath = `posts.$[object].comments.$[comment].comment`
        const newPost = {}
        newPost[postPath] = await newComment
        UserModel.findByIdAndUpdate(UserId,
            { $set: newPost },
            {
                arrayFilters: [{ "object._id": { _id: PostId } }, { "comment._id": { _id: commentId } }],
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
const addLike = async (req, res) => {
    const { UserId, PostId } = req.body

    const userLike = await UserModel.findById(UserId, { posts: { $elemMatch: { _id: PostId } } })
    let currentLikesCount = userLike.posts[0].likes
    try {
        const postPath = `posts.$[object].likes`
        const newPost = {}
        newPost[postPath] = currentLikesCount + 1
        UserModel.findByIdAndUpdate(UserId,
            { $set: newPost },
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
const decreaseLike = async (req, res) => {
    const { UserId, PostId } = req.body

    const userLike = await UserModel.findById(UserId, { posts: { $elemMatch: { _id: PostId } } })
    let currentLikesCount = userLike.posts[0].likes
    try {
        const postPath = `posts.$[object].likes`
        const newPost = {}
        newPost[postPath] = currentLikesCount - 1
        UserModel.findByIdAndUpdate(UserId,
            { $set: newPost },
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
const getAllPosts = async (req, res) => {
    let Allposts = []
    try {
        const users = await UserModel.find({})
        users.map((user) => {
            user.posts.map((post) => {
                Allposts.push(post)
            })
        })
        res.status(200).json({ message: "success", data: Allposts })
    } catch (error) {
        res.status(400).json({ message: "faild", data: error.message })
    }


}

module.exports = {
    addPost,
    deletePost,
    UpdatePost,
    addComment,
    deleteComment,
    editComment,
    addLike,
    decreaseLike,
    getAllPosts
}