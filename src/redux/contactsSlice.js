import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? startContacts,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      },
      prepare(name, number) {
        return {
          payload: {
            id: shortid.generate(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    setStatusFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, setStatusFilter } = contactsSlice.actions;
export const rootReducer = contactsSlice.reducer;