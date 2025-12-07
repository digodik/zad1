"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContact = addContact;
exports.findContactByName = findContactByName;
exports.listContacts = listContacts;
const contacts = [];
let nextId = 1;
function addContact(name, phone) {
    const contact = {
        id: nextId++,
        name,
        phone,
    };
    contacts.push(contact);
    return contact;
}
function findContactByName(name) {
    return contacts.find(c => c.name.toLowerCase() === name.toLowerCase()) || null;
}
function listContacts() {
    console.log("All contacts:");
    contacts.forEach(c => {
        console.log(`#${c.id} — ${c.name}: ${c.phone}`);
    });
}
