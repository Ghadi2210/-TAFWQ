import express from 'express';
import { insertQ8 } from '../Conteroller/Quastion8.con.js';
import { getQ8 } from '../Conteroller/Quastion8.con.js';

const router = express.Router();

router.post('/insertQ8',insertQ8);
router.get('/getQ8',getQ8);
export default router;
