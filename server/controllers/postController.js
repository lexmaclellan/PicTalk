const { Post } = require('../models')

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

            res.json({ message: 'Post deleted.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}