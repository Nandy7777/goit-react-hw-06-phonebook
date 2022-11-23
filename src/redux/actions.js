import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: shortid.generate(),
        name: name,
        number: number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact', id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
});

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  value => {
    return {
      type: 'filters/setStatusFilter',
      payload: value,
    };
  }
);
