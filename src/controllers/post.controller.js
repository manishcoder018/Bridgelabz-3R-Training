//  Create / Update / Delete posts
// • Add comments to posts
// • Get all posts with comments

const Post = require('../models/post.model');
const Comment = require('../models/comment.model');

const createPost = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const newPost = new Post({ userId: req.userId, title, content, tags });
        await newPost.save();
        res.status(201).json({ message: "Post created successfully", post: newPost });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { title, content, tags } = req.body;
        const post = await Post.findOneAndUpdate(
            { _id: postId, userId: req.userId },
            { title, content, tags },
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ message: "Post not found or unauthorized" });
        }
        res.json({ message: "Post updated successfully", post });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findOneAndDelete({ _id: postId, userId: req.userId });
        if (!post) {
            return res.status(404).json({ message: "Post not found or unauthorized" });
        }
        await Comment.deleteMany({ postId: post._id }); // Delete associated comments
        res.json({ message: "Post and associated comments deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { comment } = req.body;
        const newComment = new Comment({ postId, userId: req.userId, comment });
        await newComment.save();
        res.status(201).json({ message: "Comment added successfully", comment: newComment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPostsWithComments = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username').lean();
        for (let post of posts) {
            post.comments = await Comment.find({ postId: post._id }).populate('userId', 'username');
        }
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createPost, updatePost, deletePost, addComment, getPostsWithComments}