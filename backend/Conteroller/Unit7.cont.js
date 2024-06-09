import unit7Model from "../model/Units7.model.js"

export const insert =async (req,res,next)=>{
    try {
        const { idUnit, nameUnit } = req.body;
        const unit = new unit7Model({ idUnit, nameUnit });
        
        if (unit){
          await unit.save();
         }
        res.status(201).send(unit);
      } catch (error) {
        res.status(400).send(error);
      }
    }
 
    export const getunit = async (req, res, next) => {
      try {
        const units = await unit7Model.find();
        res.status(200).json(units);
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: "Error fetching units" });
      }
    };
    
