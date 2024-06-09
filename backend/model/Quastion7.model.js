import mongoose , {model} from "mongoose";

const Quas7Schema = new mongoose.Schema({
    idQ:{
        type : String,
        required : true,
        unique : true
    },
    Qname:{
        type: mongoose.Schema.Types.Mixed,
        required : true
    },
    idUnit:{
        type : Number,
        required : true
    },
  
},

{timestamps:true});
const Quas7 = mongoose.model('Quastion7',Quas7Schema);
export default Quas7; 