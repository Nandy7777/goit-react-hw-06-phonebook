import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contactsSlice';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(setStatusFilter(event.currentTarget.value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChange} />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
