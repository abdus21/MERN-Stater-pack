import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';


// init router
const router = express.Router();

// route REST API
router.route('/').get(adminMiddleware,getAllUser).post(adminMiddleware,createUser)
router.route('/:id').get(userMiddleware,getSingleUser).delete(userMiddleware,deleteUser).patch(userMiddleware,updateUser).put(userMiddleware,updateUser)

// user login
router.post('/login',userLogin)
router.post('/register',userRegister)

export default router