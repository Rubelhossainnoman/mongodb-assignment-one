/**
 * Package init...
 */
const { readFileSync } = require('fs');
const multer = require('multer');
const path = require('path');

/**
 * Multer config....
 */
const stroage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, path.join(__dirname, '../public/img/studentsPhoto/')); 
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now() +'_'+ Math.floor(Math.random() * 10000000) + '_' + file.originalname)
    }
});

/**
 * multer setup...
 */
const studentPhotoMulter = multer({
    storage : stroage
}).single('photo')

/**
 * Export multer here...
 */
module.exports = studentPhotoMulter;