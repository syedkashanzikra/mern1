import express from "express";

import { getContact, createContact, deleteContact, updateContact ,getAllContacts } from "../controllers/contactController.js";


const router =  express.Router();


router.post("/",createContact);
router.get("/",getAllContacts);
router.get("/:id",getContact);
router.delete("/:id",deleteContact);
router.put("/:id",updateContact);

export default router;
