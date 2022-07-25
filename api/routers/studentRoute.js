import express from 'express';
import { createStudent, deleteStudent, getAllStudent, getSingleStudent, updateStudent } from '../controllers/studentController.js';

// init router
const router = express.Router();

router.route('/').get(getAllStudent).post(createStudent)
router.route('/:id').get(getSingleStudent).delete(deleteStudent).patch(updateStudent).put(updateStudent)


export default router