const route = require('express').Router()
const {addPost,deletePost,UpdatePost,addComment} = require('../Controller/postController')

route.put('/newPost',addPost)
route.delete('/deletePost',deletePost)
route.put('/UpdatePost',UpdatePost)
route.put('/addComment',addComment)
module.exports = route;