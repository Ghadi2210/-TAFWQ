import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

 export const login = async (req, res, next) => {
    try {
      const { useremile, password } = req.body;
      console.log("Received useremile: ", useremile); // طباعة البريد الإلكتروني المستلم
      console.log("Received password: ", password); // طباعة كلمة المرور المستلمة
   
      // البحث عن المستخدم في قاعدة البيانات باستخدام البريد الإلكتروني
      const user = await User.findOne({ useremile });
      if (!user) {
        return res.status(400).json({ error: "Invalid useremile or password" });
      }
  
      const isPassword = await bcryptjs.compare(password, user.password);
      if (!isPassword) {
        return res.status(400).json({ error: "Invalid useremile or password" });
      }
  
      console.log("User found: ", user);
      res.status(200).json({ message: "Login successfully", user });
    } catch (error) {
      console.log("Error in login controller: ", error.message);
      res.status(500).json({ error: "Server error" });
    }
  };
  
export const logout = async (req,res,next)=>{
    try{
        res.cookie('token',"",{maxAge:0});
        res.status(500).json({error:"internal server error"}); 
    } catch (error){
        console.log("error in login controller ", error.message);
        res.status(200).json ({message: " logged out successfully "});
    }
}

 export const signup = async (req,res,next)=>{
    try{
        const {username , useremile , password  , confirmPassword } = req.body;
        if(password !== confirmPassword ){
           return res.status(400).json({ error : " password don`t match "});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({ error : " user name has been exit "});
         }
         const salt = await bcryptjs.genSalt(10);
         const hashed = await bcryptjs.hash(password,salt)

         const newUser =new User({
            username,
            useremile,
            password : hashed,
            confirmPassword
           
         })
         if(newUser){
            await newUser.save();
            res.status(201).json({
                username : newUser.username,
                useremile : newUser.useremile,
                password : newUser.password,
                
            })
         }else{
            res.status(409).json({error:'invaled user data'})
         }
    }catch (error){
        console.log("error in signup controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
 } 
  

export const getuser = async (req,res,next)=>{
    try{
        const user = await User.findOne();
        res.status(200).json ({user});
    } catch (error){
        console.log("   ", error.message);
        res.status(400).json ({message: "  "});
    }
}

