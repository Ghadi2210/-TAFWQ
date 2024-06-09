import express from 'express' ;
import bodyParser from 'body-parser';
import mongooes from 'mongoose';
import cors from 'cors';
import AuthRouter from '../backend/Router/auth.route.js' 
import unitroter from '../backend/Router/Unit7.router.js' 
import unit8roter from '../backend/Router/Unit8.router.js' 
import exerouter from '../backend/Router/exe7.router.js' 
import ex from '../backend/Router/exe8.router.js' 
import sugconrouter from '../backend/Router/sugcon.router.js' 
import Q7router from '../backend/Router/Quastion7.router.js' 
import Q8router from '../backend/Router/Quastion8.router.js' 

const app = express();
app.use(bodyParser.json({limit: "30mb" , extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true }));
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/unit',unitroter);
app.use('/unit8',unit8roter);
app.use('/exe',exerouter);
app.use('/sug',sugconrouter);
app.use('/ex',ex);
app.use('/Quas7',Q7router);
app.use('/Quas8',Q8router);

const port = process.env.port || 6000;

 app.listen(port ,async () =>{
    
    try{
        await mongooes.connect('mongodb+srv://skyphhhf:T0dso6oDgMVfrsbe@cluster0.sqvnrxz.mongodb.net/mathe?retryWrites=true&w=majority&appName=Cluster0')
        console.log("    conntect to DB    ");
    }  catch(err){
        // console.log(err)
        throw err
    }  
    console.log(`connection to backend on port ${port} `);
})