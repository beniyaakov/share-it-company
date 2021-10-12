const route = require('express').Router()
const {addPost,deletePost,UpdatePost,addComment,deleteComment,editComment,addLike,decreaseLike,getAllPosts} = require('../Controller/postController')

route.put('/newPost',addPost)
route.delete('/deletePost',deletePost)
route.put('/UpdatePost',UpdatePost)
route.put('/addComment',addComment)
route.put('/editComment',editComment)
route.delete('/deleteComment',deleteComment)
route.put('/addLike',addLike)
route.put('/decreaseLike',decreaseLike)
route.get('/getAllPosts',getAllPosts)
module.exports = route;