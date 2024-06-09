import Quas8 from "../model/Quastion8.model.js";

export const insertQ8 = async (req, res, next) => {
  try {
    const { idt,  Qname , idUnit } = req.body;
    const quastion = new Quas8({ idt , Qname , idUnit });

    await quastion.save();

    res.status(200).json(quastion); 
  } catch (error) {
    res.status(400).json(error); 
  }
}

export const getQ8 = async (req,res,next)=>{
    try{
        
        const quastion = await Quas8.find();
        res.status(200).json (quastion);

    } catch (error){
        console.log("   ", error.message);
        res.status(400).json ({message: "  "});
    }
}