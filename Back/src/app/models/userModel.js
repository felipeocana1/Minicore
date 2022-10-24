const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    purchase_date: {
        type: Date,
        required: true,
        trim: true
    },
    expiration_date: {
        type: Date,
        required: true,
        trim: true
    },
    pass_type: {
        type: String,
        required: true,
        trim: true
    },
    pass_id: {
        type: String,
        required: true,
        trim: true
    },
    pass_passes: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('users', userSchema);