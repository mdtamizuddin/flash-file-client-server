const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    toolName: {
        type: String,
        required: true,
    },
    toolUrl: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    tutorial: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    links: {
        type: Array,
        required: true,
    },
    version: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

const Files = new mongoose.model("Files", fileSchema);

module.exports = Files;
