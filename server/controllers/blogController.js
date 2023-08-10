const Blog = require("../models/Blog");

module.exports.findAllBlogs = (req, res) => {
    Blog.find()
    .then(allBlogs => res.json(allBlogs))
    .catch( err=> res.status(400).json(err));
};

module.exports.findOneBlog = (req, res) => {
    Blog.findById({_id: req.params.id})
    .then(oneBlog => res.json(oneBlog))
    .catch(err => res.status(400).json(err));
};

module.exports.createBlog = (req, res) => {
    Blog.create(req.body)
    .then(newBlog => res.json(newBlog))
    .catch(err => res.status(400).json(err));
};

module.exports.updateBlog = (req, res) => {
    Blog.findByIdAndUpdate({_id: req.params.id},
        req.body, {new: true, runValidators: true})
        .then(updatedBlog => res.json(updatedBlog))
        .catch( err => res.status(400).json(err));
};

module.exports.deleteBlog = (req, res) => {
    Blog.findByIdAndDelete({_id: req.params.id})
    .then(result => res.json(result))
    .catch( err => res.status(400).json(err));
}