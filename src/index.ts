import { addContact, findContactByName, listContacts } from "./tasks/task4/task4";


addContact("vaska", "+380501234567");
addContact("Ivan", "+380987654321");
addContact("petka", "+380631112233");


const found = findContactByName("Ivan");
console.log("Found contact:", found);


listContacts();
