import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookStyled } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/ContactsSlices';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contactList);
  const dispatch = useDispatch();

  const checkEqualContact = contact => {
    return contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const addContactCheck = contact => {
    if (!checkEqualContact(contact)) {
      dispatch(addContact(contact));
    } else alert('Such contact already exists');
  };


  return (
    <PhonebookStyled>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactCheck} />

        <h2>Total contacts: {contacts.length}</h2>
      <Filter />
      <ContactList
        // contactList={contacts}
       
      ></ContactList>
    </PhonebookStyled>
  );
};
