import Quas7 from "../model/Quastion7.model.js";

export const insertQ7 = async (req, res, next) => {
  try {
    const { idt,  Qname , idUnit } = req.body;
    const quastion = new Quas7({ idt , Qname , idUnit });

    await quastion.save();
    
    res.status(200).json(quastion); 
  } catch (error) {
    res.status(400).json(error); 
  }
  
}

export const getQ7 = async (req,res,next)=>{
    try{
        
        const quastion = await Quas7.find();
        res.status(200).json (quastion);

    } catch (error){
        console.log("   ", error.message);
        res.status(400).json ({message: "  "});
    }
}