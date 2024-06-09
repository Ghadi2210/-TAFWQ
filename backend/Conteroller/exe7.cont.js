import Exe7Model from "../model/exe7.model.js";

export const insertE7 = async (req, res, next) => {
  try {
    const { idt, idUnit, Qt, answert, steps } = req.body;
    const exe = new Exe7Model({ idt, idUnit, Qt, answert, steps });

    // حفظ البيانات في قاعدة البيانات
    await exe.save();

    res.status(200).send(exe); // تغيير رمز الحالة إلى 200
  } catch (error) {
    res.status(400).send(error); // إرجاع رمز الحالة 400 في حالة حدوث خطأ
  }
}

 /** 
    export const getunit = async (req,res,next)=>{
      try{
          
          const unit = await unit7Model.find();
          console.log(" after find ")
          res.status(200).json (unit);
          console.log(" after try ")
      } catch (error){
          console.log("   ", error.message);
          res.status(400).json ({message: "  "});
      }
  }
*/