const express = require('express');
const router = express.Router();

const studentController = require('../controller/student');

router.get('/insert', studentController.insertStudents);
router.get('/all', studentController.getAll);
router.get('/dsbda', studentController.dsbda);
router.get('/update/:name', studentController.updateMarks);
router.get('/above25', studentController.above25);
router.get('/less40', studentController.less40);
router.get('/delete/:name', studentController.deleteStudent);
router.get('/table', studentController.table);

module.exports = router;