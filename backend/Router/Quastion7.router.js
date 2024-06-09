import express from 'express';
import { insertQ7 } from '../Conteroller/Quastion.7con.js';
import { getQ7 } from '../Conteroller/Quastion.7con.js';

const router = express.Router();

router.post('/insertQ7',insertQ7);
router.get('/getQ7',getQ7);
export default router;
