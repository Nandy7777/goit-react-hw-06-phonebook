import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
