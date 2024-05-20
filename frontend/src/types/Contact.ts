export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ContactListProps {
  contacts: Contact[];
  updateContact: (contact: Contact) => void;
  updateCallback: (contact: Contact) => void;
}
}
