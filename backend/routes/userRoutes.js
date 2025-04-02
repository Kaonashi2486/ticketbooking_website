import express from 'express';
import { register, login } from '../controllers/usercontroller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get('/profile', auth, getProfile); // Protected route

export default router;

