import unit8Model from "../model/Units7.model.js"

export const insert =async (req,res,next)=>{
    try {
        const { idUnit, nameUnit } = req.body;
        const unit = new unit8Model({ idUnit, nameUnit });
        
        if (unit){
          await unit.save();
         }
        res.status(201).send(unit);
      } catch (error) {
        res.status(400).send(error);
      }
    }
 
    export const getunit8 = async (req, res, next) => {
      try {
           
        const unit8 = await unit8Model.find();
        console.log("  دخل  ")
        res.status(200).json(unit8);
        console.log(unit8)
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: "Error fetching units" });
      }
    };
    