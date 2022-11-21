import ContactListItem from 'components/ContactListItem';
import React from 'react';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts
    .filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};;

// ContactList.propTypes = {
//    contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ContactList;
