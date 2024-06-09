import mongoose , {model} from "mongoose";

const exe8Schema = new mongoose.Schema({
    idt:{
        type: String,
        required : true,
        unique : true
    },
    idUnit :{
        type : Number,
        required :true
    },
    Qt:{
        type : String,
        required :true
    },
    answert:{
        type : String,
        required :true
    },
},
{timestamps:true});
const eightt = mongoose.model('Eightt',exe8Schema);
export default eightt; 