const { User, Post } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign(_id, process.env.SECRET, { expiresIn: '3d' })
}

module.exports = {

    async loginUser(req, res) {
        try {
            res.json({ message: "Coming soon" })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async registerUser(req, res) {
        try {
            const emailExists = await User.find({ email: req.body.email })
            
            if (emailExists.length) {
                return res.status(500).json({ message: 'Email already registered.' })
            }
            else {
                const newUser = req.body
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(newUser.password, salt)
                newUser.password = hash

                const user = await User.create(newUser)
                const token = createToken(user._id)
                console.log(token)
                res.json({user, token})
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },

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

            const posts = []
            for (let i = 0; i < user.friendCount; i++) {
                const friend = await User.findById(user.friends[i])

                if (!friend) {
                    return res.status(404).json({ message: 'Invalid friend ID.' })
                }

                for (let n = 0; n < friend.postCount; n++) {
                    const post = await Post.findById(friend.posts[n])

                    if (!post) {
                        return res.status(404).json({ message: 'Invalid post ID.' })
                    }

                    posts.push(post)
                }
            }

            sortByDate = (a, b) => {
                const dateA = new Date(a.createdAt)
                const dateB = new Date(b.createdAt)
                if (dateA < dateB) return 1
                else if (dateA > dateB) return -1
                return 0
            }

            res.json(posts.sort(sortByDate))
        } catch (err) {
            res.status(500).json(err)
        }
    }

}