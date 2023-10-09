import express from 'express';
import { authUser, registerUser, logoutUser, getProfileUser, updateProfileUser } from '../controllers/userController.js'
const router = express.Router();
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    .get(getProfileUser)
    .put(updateProfileUser);

export default router