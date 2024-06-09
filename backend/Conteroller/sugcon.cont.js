import sugcon from "../model/sugcom.model.js"

export const massage = async (req,res,next)=>{
    try{
        const {massage , email } = req.body;
         const newmassage =new sugcon({
            massage,
            email,
         })
         if(newmassage){
            await newmassage.save();
            res.status(201).json({
                massage : newmassage.massage,
                email : newmassage.email ,
            })
         }else{
            res.status(409).json({error:'invaled massage data'})
         }
    }catch (error){
        console.log("error in massage controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
 } 
  