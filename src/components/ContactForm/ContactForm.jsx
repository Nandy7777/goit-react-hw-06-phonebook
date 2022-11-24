import shortid from 'shortid';
import { Form, Label, Input, Button, FormWrap } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };
 
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (
      contacts.some(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.some(option => option.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(name, number));
    }
    setName('');
    setNumber('');
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={shortid.generate()}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={shortid.generate()}
          />
        </Label>
        <Label htmlFor={shortid.generate()}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={shortid.generate()}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrap>
  );
};

export default ContactForm;
