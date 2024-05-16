export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ContactListProps {
  contacts: Contact[];
}
