import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister,getLoggedUser,verifyAccount,recoverpassword,resetpassword } from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';



// init router
const router = express.Router();

// user login
router.post('/login',userLogin)
router.post('/register',userRegister)
router.get('/me',getLoggedUser)
router.post('/verify',verifyAccount)
router.post('/recover-password',recoverpassword)
router.patch('/reset-password',resetpassword)

// route REST API
router.route('/').get(getAllUser).post(adminMiddleware,createUser)
router.route('/:id').get(userMiddleware,getSingleUser).delete(userMiddleware,deleteUser).patch(userMiddleware,updateUser).put(userMiddleware,updateUser)




export default router