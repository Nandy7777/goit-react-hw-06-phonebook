import { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import shortid from 'shortid';
import useLocalStorage from 'hooks/useLocalStorage';


export default function App() {

   const startContacts = [
     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
   ];
  
  const [contacts, setContacts] = useLocalStorage(startContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHandler =  ({ name, number })  => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    
    if (
      contacts.some(
        option => option.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.some(option => option.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  };
  
  const visibleContacts = contacts
    .filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem(`contacts`);
//     const parseContacts = JSON.parse(contacts);

//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts))
//     }
//   }

//   formSubmitHandler = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     const findContact = this.state.contacts.find(contact =>
//       contact.name.toLowerCase().includes(name.toLowerCase())
//     );

//     findContact ? alert(`${name} is already in contacts.`)
//       :
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };
  
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;

//     const normalizedFilter = this.state.filter.toLowerCase();

//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter))
    
    
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDelete={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;