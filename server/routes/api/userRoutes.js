const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    getPostsFromUser,
    getPostsFromFriends
} = require('../../controllers/userController')

router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser)
router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend)
router.route('/:username/posts').get(getPostsFromUser)
router.route('/:username/friends').get(getPostsFromFriends)

module.exports = router