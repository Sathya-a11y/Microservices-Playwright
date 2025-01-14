import express from 'express';
import { registerUser, authenticateUser, deleteUser } from '../../src/controllers/loginController';

const router = express.Router();

router.post('/register', registerUser);
router.post('/authenticate', authenticateUser);
router.delete('/:username', deleteUser);

export const loginRoutes = router;