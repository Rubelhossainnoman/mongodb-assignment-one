/**
 * Package init...
 */
const express = require('express');
const { home, create, submit, deleteSingleUser, singleStudent, edit_single_student, update_student } = require('../controllers/studentControllers');
const studentPhotoMulter = require('../middleware/studentsMiddleware');

/**
 * Router init...
 */
const routers = express.Router();

/**
 * Create and manage routing system from here...
 */
routers.get('/', home);
routers.get('/create', create);
routers.get('/:id', singleStudent);
routers.post('/submited', studentPhotoMulter, submit)
routers.get('/edit-single-student/:id', edit_single_student)
routers.post('/update/:id', studentPhotoMulter, update_student)
routers.get('/delete/:id', deleteSingleUser)

/**
 * Export routhers...
 */
module.exports = routers;