import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ contact}) => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <Item>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </Button>
    </Item>
  );
};

// const ContactListItem = ({ id, name, number, onDelete }) => {
//   return (
//     <Item>
//       <p>
//         {name}: {number}
//       </p>
//       <Button type="button" onClick={() => onDelete(id)}>
//         Delete
//       </Button>
//     </Item>
//   );
// };

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactListItem;
