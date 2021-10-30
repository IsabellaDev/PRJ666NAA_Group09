const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var FaqSchema = new Schema({
    
    "category": {
        type: String
    },
    
    "articleTitle": {
        type: String,
        required: true
    },
    "body": {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Faq", FaqSchema);