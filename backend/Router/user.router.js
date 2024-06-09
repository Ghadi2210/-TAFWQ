import express from 'express'
import {getuser} from '../Conteroller/auth.conteroller.js'

const router = express.Router();
router.get('/getuser',getuser);

export default router ;