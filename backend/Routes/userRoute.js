import express from 'express';

import { authUser, registerUser, logoutUser, getProfileUser, updateProfileUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    .get(protect, getProfileUser)
    .put(protect, updateProfileUser);

export default router