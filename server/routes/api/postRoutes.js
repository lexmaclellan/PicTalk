const router = require('express').Router()

const {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost
} = require('../../controllers/postController')

router.route('/').get(getAllPosts).post(createPost)
router.route('/:postId').get(getOnePost).put(updatePost).delete(deletePost)

module.exports = router