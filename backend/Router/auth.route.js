import express from 'express';
import {login, logout, signup , getuser } from '../Conteroller/auth.conteroller.js';

const router = express.Router();

router.post('/login',login);
router.post('/signup',signup);
router.post('/logout',logout);
router.get('/getuser',getuser);

export default router;