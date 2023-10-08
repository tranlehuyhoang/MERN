import express from 'express';
import { authUser, registerUser, logoutUser, getProfileUser, updateProfileUser } from '../Controllers/userController.js'
const route = express.Router();
route.post('/auth', authUser)

export default route