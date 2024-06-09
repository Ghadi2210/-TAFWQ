import mongoose , {model} from "mongoose";

const sugconSchema =  new mongoose.Schema({

    massage : {
    type : String ,
    required: true 
    },
    email :{
        type : String,
        required: true ,
        unique : true
    },
    seen :{
        type: Boolean,
        defaulte : false
    }
}, {timestamps:true} );

const sugconmodel =mongoose.model('sugconmodel',sugconSchema)
export default sugconmodel ;





















/** import mongoose , {model} from "mongoose";

const sugconSchema = new mongoose.Schema({
  
    massage:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true ,
        unique : true 
    },
    seen :{
        type : Boolean,
        required : true
    }
},
{timestamps:true});
const sugconmodel = mongoose.model('sugconmodel',sugconSchema);

export default {sugconmodel}; */