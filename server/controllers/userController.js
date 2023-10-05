const { User, Post } = require('../models')

module.exports = {

    async getAllUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await User.findById(req.params.userId)

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID.' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID.' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.userId)

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID.' })
            }

            res.json({ message: 'User deleted.' })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async addFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID.' })
            }
            
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async removeFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true}
            )

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID.' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getPostsFromUser(req, res) {
        try {
            const post = await Post.find({ username: req.params.username })
            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getPostsFromFriends(req, res) {
        try {
            const user = await User.findOne({ username: req.params.username })
            
            if (!user) {
                return res.status(404).json({ message: 'No user found with that username.' })
            }

            const friends = []
            for (let i = 0; i < user.friendCount; i++) {
                const friend = await User.findById(user.friends[i])

                if (!friend) {
                    return res.status(404).json({ message: 'Invalid friend ID.' })
                }
                
                friends.push(friend)
            }

            const posts = []
            for (let n = 0; n < friends.length; n++) {
                //const post = await Post.findById
            }

            res.json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}