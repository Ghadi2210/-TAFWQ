import mongoose , { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    useremile:{
        type: String,
        required : true,
        unique : true 
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required:false
    }
},
{timestamps:true});

const User = mongoose.model('User',userSchema);
 
export default  User ; 