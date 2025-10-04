const express = require("express");
const router = express.Router();

const contacts = require("../controllers/contact.controller");

// Create a new Contact
router.post("/", contacts.create);

// Retrieve all Contacts
router.get("/", contacts.findAll);

// Retrieve all favorite Contacts
router.get("/favorites", contacts.findAllFavorite);

// Retrieve a single Contact with id
router.get("/:id", contacts.findOne);

// Update a Contact with id
router.put("/:id", contacts.update);

// Delete a Contact with id
router.delete("/:id", contacts.delete);

// Delete all Contacts
router.delete("/", contacts.deleteAll);

module.exports = router;
