const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemname: {
        type: String,
        required: false
    },
    itemqty: {
        type: Number,
        required: false
    },
    itembought: {
        type: Boolean,
        required: false
    }
});

const items = mongoose.model('items', itemSchema);

module.exports = items;