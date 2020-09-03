const mongoose = require("mongoose");

var crudSchema = new mongoose.Schema({
    dep_name:{
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("CRUD_DB", crudSchema);