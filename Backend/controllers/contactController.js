import Contactdata from "../models/contact.js";



export const createContact = async (req, res) => {
    try {

        const contact = new Contactdata(req.body);
    
        await contact.save();
    
        res.status(201).json(contact);
    } catch (error) {
       
        res.status(500).json({ message: error.message });
    }
};



export const getAllContacts = async (req,res)=>{
    try{
const  contacts = await Contactdata.find();
res.status(200).json(contacts);
    }
    catch(error){
        res.status(500).json({ message: error.message });

    }
}

export const getContact = async (req,res)=>{
    try{
const  individualcontact = await Contactdata.findById(req.params.id);

if(!individualcontact){

    return res.status(404).json({message:"Contact not Forund"})
}else{
    res.status(200).json(individualcontact);
}

    }
    catch(error){
        res.status(500).json({ message: error.message });

    }
}


export const deleteContact  = async (req,res)=>{
    try{
const  contact = await Contactdata.findByIdAndDelete(req.params.id);

if(!contact){

    return res.status(404).json({message:"Contact not Found"})
}else{
    res.status(200).json({message :"Contact Deleted Sucessfully"});
}

    }
    catch(error){
        res.status(500).json({ message: error.message });

    }
}


export const updateContact  = async (req,res)=>{
    try{
const  updatedcontact = await Contactdata.findByIdAndUpdate(req.params.id,req.body,{
    new :true,
});

if(!updatedcontact){

    return res.status(404).json({message:"Contact not Found"})
}else{
    res.status(200).json(updatedcontact);
}

    }
    catch(error){
        res.status(500).json({ message: error.message });

    }
}