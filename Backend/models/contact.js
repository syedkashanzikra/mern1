import mongoose, { Schema } from "mongoose";

const  usercontactdata = new Schema({



    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone_no:{
        type:String,
        required:true
    }, 
       subject:{
        type:String,
        required:true
    },  
    
    message:{
        type:String,
        required:true
    },

    date:{
        type:Date,
      default:Date.now()
    },
})

const Contactdata = mongoose.model("Contact", usercontactdata);

export default Contactdata;