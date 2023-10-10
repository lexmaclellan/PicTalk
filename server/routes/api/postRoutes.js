const router = require('express').Router()

const {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost,
    getComments,
    addComment,
    removeComment,
    addLike,
    removeLike
} = require('../../controllers/postController')

router.route('/').get(getAllPosts).post(createPost)
router.route('/:postId').get(getOnePost).put(updatePost).delete(deletePost)
router.route('/:postId/comments').get(getComments).post(addComment)
router.route('/:postId/comments/:commentId').delete(removeComment)
router.route('/:postId/likes/:username').post(addLike).delete(removeLike)

module.exports = router