/**
 * connect with config...here..
 */
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    skill : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        min : 20,
        max : 45
    },
    photo : {
        type : String,
        trim : true
    }
},{
    timestamps : true
})

/**
 * Export collections....
 */
module.exports = mongoose.model('student', studentSchema);

