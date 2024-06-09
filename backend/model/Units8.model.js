 import mongoose , {model} from "mongoose";

const unit8Schema = new mongoose.Schema({
    idUnit:{
        type : Number,
        required : true,
        unique : true
    },
    nameUnit:{
        type : String,
        required : true
    }
},
{timestamps:true}
);
const  unit8Model = mongoose.model('Eight',unit8Schema);
export default unit8Model ;
