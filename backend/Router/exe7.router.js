import express from 'express';
import { insertE7 } from '../Conteroller/exe7.cont.js';

const router = express.Router();

router.post('/insertE7',insertE7);

export default router;
