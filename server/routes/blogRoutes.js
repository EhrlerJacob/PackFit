const BlogController = require("../controllers/blogController");

module.exports = (app) => {
    app.get("/api/blogs", BlogController.findAllBlogs);
    app.get("/api/blogs/:id", BlogController.findOneBlog);
    app.post("/api/blogs", BlogController.createBlog);
    app.patch("/api/blogs/:id", BlogController.updateBlog);
    app.delete("/api/blogs/:id", BlogController.deleteBlog);
}