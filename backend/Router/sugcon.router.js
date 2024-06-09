import express from 'express';
import { massage } from '../Conteroller/sugcon.cont.js';

const router = express.Router();

router.post('/massage',massage);

export default router;