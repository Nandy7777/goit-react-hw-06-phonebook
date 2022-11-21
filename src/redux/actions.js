import shortid from 'shortid';

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = id => {
    return {
    type: "contacts/deleteContact",
    payload: id,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

