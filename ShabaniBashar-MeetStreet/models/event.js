const mongoose = require('mongoose');
const { format } = require('morgan');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    createdAt: {
        type: Date,
        get: function (createdAt) {
            return createdAt.toLocaleString();
        },
    },
    category: { type: String, required: [true, 'category is required'] },
    title: { type: String, required: [true, 'title is required'] },
    content: {
        type: String,
        required: [true, 'content is required'],
        minLength: [10, 'the content should have at least 10 characters'],
    },
    location: { type: String, required: [true, 'location is required'] },
    start: {
        type: Date,
        required: [true, 'start is required'],
        get: function (start) {
            return start.toLocaleString();
        },
    },
    end: {
        type: Date,
        required: [true, 'end is required'],
        get: function (end) {
            return end.toLocaleString();
        },
    },
    host: { type: Schema.Types.ObjectId, ref: 'User' },
    image: { type: String, required: [true, 'image is required'] },
}, { timestamps: true });


//collection name is event in the database
module.exports = mongoose.model('Event', eventSchema);