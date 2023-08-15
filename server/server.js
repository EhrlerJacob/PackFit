const express = require("express");
const cors = require("cors");
const app = express();
require('./config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const BlogRoutes = require('./routes/blogRoutes');
BlogRoutes(app);

app.listen(8000, () => {
    console.log("Server Running on Port 8000")
});