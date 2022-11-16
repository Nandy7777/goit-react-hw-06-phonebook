import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ContactListItem;
