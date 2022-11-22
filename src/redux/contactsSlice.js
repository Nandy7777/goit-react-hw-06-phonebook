import { createSlice, nanoid } from '@reduxjs/toolkit';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: startContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
       return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    setStatusFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

export const { addContact, deleteContact, setStatusFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
  
  
//   initialState, {
//   [addContact]: (state, action) => {
//     return {
//       ...state,
//       contacts: [...state.contacts, action.payload],
//     };
//   },
//   [deleteContact]: (state, action) => {
//     return {
//       ...state,
//       contacts: state.contacts.filter(contact => contact.id !== action.payload),
//     };
//   },
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   },
// });

//  => {
//   switch (action.type) {
//     case addContact.type: {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case deleteContact.type: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case setStatusFilter.type: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
