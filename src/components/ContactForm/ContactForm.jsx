import shortid from 'shortid';
import { Form, Label, Input, Button, FormWrap } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { useState } from 'react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
      setName(event.target.value);
    };

  const handleNumberChange = event => {
      setNumber(event.target.value);
    };

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


// export default function ContactForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = event => {
//     setNumber(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     onSubmit({name, number});
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <FormWrap>
//       <Form onSubmit={handleSubmit}>
//         <Label htmlFor={shortid.generate()}>
//           Name
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleNameChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             id={shortid.generate()}
//           />
//         </Label>
//         <Label htmlFor={shortid.generate()}>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleNumberChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             id={shortid.generate()}
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     </FormWrap>
//   );
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <FormWrap>
//         <Form onSubmit={this.handleSubmit}>
//           <Label htmlFor={this.nameInputId}>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               id={this.nameInputId}
//             />
//           </Label>
//           <Label htmlFor={this.numberInputId}>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               id={this.numberInputId}
//             />
//           </Label>
//           <Button type="submit">Add contact</Button>
//         </Form>
//       </FormWrap>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

// export default ContactForm;