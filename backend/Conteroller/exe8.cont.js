import eightt from "../model/exe8.model.js";

export const insert = async (req, res, next) => {
  try {
    const { idt, idUnit, Qt, answert } = req.body;
    const ex8 = new eightt({ idt, idUnit, Qt, answert });
    
    // حفظ البيانات في قاعدة البيانات
    await ex8.save();

    res.status(201).send(ex8); // إرسال الاستجابة بنجاح
  } catch (error) {
    res.status(400).send(error); // إرسال الخطأ في حالة حدوث خطأ
  }
}
