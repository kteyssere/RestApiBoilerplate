const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    filed: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('models', mySchema);