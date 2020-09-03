const mongoose = require("mongoose");

var crudSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("CRUD_DB", crudSchema);