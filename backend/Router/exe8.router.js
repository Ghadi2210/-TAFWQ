import express from 'express';
import { insert } from '../Conteroller/exe8.cont.js';

const router = express.Router();

router.post('/insert',insert);

export default router;