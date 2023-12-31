const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blogs", {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Established Connection to DB"))
    .catch( err => console.log("Something went wrong connecting to DB", err));

require("../models/Blog");