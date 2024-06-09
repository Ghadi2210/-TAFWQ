import express from 'express';
import { insert } from '../Conteroller/Unit7.cont.js';
import { getunit } from '../Conteroller/Unit7.cont.js';
const router = express.Router();

router.post('/insert',insert);
router.get('/getunit',getunit);
export default router;