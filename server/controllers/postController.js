const { Post, User } = require('../models')

module.exports = {

    async getAllPosts(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getOnePost(req, res) {
        try {
            const post = await Post.findById(req.params.postId)

            if (!post) {
                return res.status(404).json({ message: 'No post found with that ID.' })
            }

            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async createPost(req, res) {
        try {
            const post = await Post.create(req.body)
            const user = await User.findOneAndUpdate(
                { name: req.body.username },
                { $push: { posts: post._id } },
                { new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'Invalid user ID.' })
            }

            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async updatePost(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params.postId,
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if (!post) {
                return res.status(404).json({ message: 'No post found with that ID.' })
            }

            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deletePost(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params.postId)

            if (!post) {
                return res.status(404).json({ message: 'No post found with that ID.' })
            }

            const user = await User.findByIdAndUpdate(
                { username: post.username },
                { $pull: { posts: req.params.postId } },
                { new: true }
            )

            if (!user) {
                res.json({ message: 'No user found with that post.' })
            }

            res.json({ message: 'Post deleted.' })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async addComment(req, res) {
        try {
            const comment = await Post.findByIdAndUpdate(
                req.params.postId,
                { $addToSet: { comments: req.body } },
                { runValidators: true, new: true }
            )

            if (!comment) {
                return res.status(404).json({ message: 'No post found with that ID.' })
            }

            res.json(comment)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async removeComment(req, res) {
        try {
            const comment = await Post.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { comments: { commentId:req.params.commentId } } },
                { runValidators: true, new: true }
            )

            if (!comment) {
                return res.status(404).json({ message: 'No post found with that ID.' })
            }

            res.json(comment)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}