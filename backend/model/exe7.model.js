 import mongoose , {model} from "mongoose";

const exe7Schema = new mongoose.Schema({
    idt:{
        type : String,
        required : true,
        unique : true
    },
    idUnit:{
        type : Number,
        required : true
    },
    Qt:{
        type: mongoose.Schema.Types.Mixed,
        required : true
    },
    answert:{
        type: mongoose.Schema.Types.Mixed,
        required : true
    },
    steps:{
        type: mongoose.Schema.Types.Buffer,
        required : false
    },
},

{timestamps:true});
const exe7 = mongoose.model('sevent',exe7Schema);
export default {exe7}; 