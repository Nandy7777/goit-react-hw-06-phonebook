import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

const ContactListItem = ({ contact }) => {
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

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactListItem;
