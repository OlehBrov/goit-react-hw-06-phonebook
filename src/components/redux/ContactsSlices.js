import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactList: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactList.push(action.payload);
        // return [...state, action.payload];
      },
      prepare(contact) {
        // console.log('prepare contact', contact);
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      console.log('state.contactList delete', state.contactList)
      return state.contactList.filter(el => el.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
