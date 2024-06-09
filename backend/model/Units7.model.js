import mongoose , {model} from "mongoose";

const unit7Schema = new mongoose.Schema({
    idUnit:{
        type : Number,
        required : true,
        unique : true
    },
    nameUnit:{
        type :String,
        required : true
    }
},
{timestamps:true}
);
const unit7Model = mongoose.model('Seven',unit7Schema);
export default unit7Model; 