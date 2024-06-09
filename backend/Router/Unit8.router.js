import express from 'express';
import { insert } from '../Conteroller/Unit8.cont.js';
import { getunit8 } from '../Conteroller/Unit8.cont.js';
const router = express.Router();

router.post('/insert',insert);
router.get('/getunit8',getunit8);

export default router;