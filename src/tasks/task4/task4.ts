export type Contact = {
  id: number;
  name: string;
  phone: string;
};

const contacts: Contact[] = [];

let nextId = 1;

export function addContact(name: string, phone: string): Contact {
  const contact: Contact = {
    id: nextId++,
    name,
    phone,
  };

  contacts.push(contact);
  return contact;
}

export function findContactByName(name: string): Contact | null {
  return contacts.find(c => c.name.toLowerCase() === name.toLowerCase()) || null;
}

export function listContacts(): void {
  console.log("All contacts:");
  contacts.forEach(c => {
    console.log(`#${c.id} — ${c.name}: ${c.phone}`);
  });
}
