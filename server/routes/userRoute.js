import express from 'express'
import { registerUser, loginUser, userCredits, paymenetRazorpay, verifyRazorpay } from "../controllers/userController.js";
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', authUser, userCredits)
userRouter.post('/pay-razor', authUser, paymenetRazorpay)
userRouter.post('/verify-razor', verifyRazorpay);


export default userRouter