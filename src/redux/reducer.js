import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setStatusFilter } from 'redux/actions';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? startContacts,
  filter: '',
};

export const rootReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return {
    ...state,
    contacts: [...state.contacts, action.payload],
  }},
  [deleteContact]: (state, action) => {
    return {
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== action.payload),
  }},
  [setStatusFilter]: (state, action) => {
    return {
    ...state,
    filter: action.payload,
  }},
});

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type: {
      // return {
      //   ...state,
      //   contacts: [...state.contacts, action.payload],
      // };
//     }
//     case deleteContact.type: {
      // return {
      //   ...state,
      //   contacts: state.contacts.filter(
      //     contact => contact.id !== action.payload
      //   ),
      // };
//     }
//     case setStatusFilter.type: {
      // return {
      //   ...state,
      //   filter: action.payload,
      // };
//     }
//     default:
//       return state;
//   }
// };
