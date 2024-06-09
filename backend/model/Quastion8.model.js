import mongoose , {model} from "mongoose";

const Quas8Schema = new mongoose.Schema({
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
const Quas8 = mongoose.model('Quastion8',Quas8Schema);
export default {Quas8}; 