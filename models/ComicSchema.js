const mongoose = require("mongoose")

const ComicSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    authorName: {
        type: String,
        default: ""
    },
    yearOfPublication: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: { type: Number, default: 0 },
    numberOfPages: { type: Number, required: true },
    condition: { type: String, enum: ['new', 'used'], required: true },
}, {
    timestamps: true
})

const Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic