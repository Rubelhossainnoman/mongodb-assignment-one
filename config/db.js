/**
 * Package init...
 */
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

/**
 * Mongoose config....
 */
const connectWithMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB Connect successfull`.bgCyan.white);
    } catch (error) {
        console.log(`${error.message}`.bgRed.white);
    }
}

/**
 * Export mongoose...
 */
module.exports = connectWithMongoDB;