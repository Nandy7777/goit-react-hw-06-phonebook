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
 

export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
    switch (action.type) {
        case "contacts/addContact": {
            return {
              ...state,
              contacts: [
                // в якому є всі існуючі завдання
                ...state.contacts,
                // та об'єкт нового завдання
                action.payload,
              ],
            };
        }
        case "contacts/deleteContact": {
           return {
             ...state,
             contacts: state.contacts.filter(
               contact => contact.id !== action.payload
             ),
           };
      }
      case "filters/setStatusFilter": {
        return {
          ...state,
          filter: action.payload,
        };
        }
        
    // Залежно від типу екшену виконуватиметься різна логіка
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};