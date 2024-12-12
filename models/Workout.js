const mongoose = require('mongoose');

const workOutSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'userId is required']
    },
    name: {
        type: String,
        required: [true, 'Workout Name is Required']
    },
    duration: {
        type: String,
        required: [true, 'Workout Description is Required']
    },
    status: {
        type: String,
        default: "pending"
    }
});

module.exports = mongoose.model('WorkOut', workOutSchema);