import { ContactItem } from 'components/ContactItem/ContactItem';
import { deleteContact } from 'components/redux/ContactsSlices';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export function ContactList() {
  const searchQuery = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contactList);
  const dispatch = useDispatch();

  const contactsToRender = (contacts, searchQuery) => {
    if (searchQuery === '') {
      return contacts;
    } else {
      return contacts.filter(person => {
        return person.name.toLowerCase().includes(searchQuery);
      });
    }
  };

  return (
    <List>
      {contacts.length
        ? contactsToRender(contacts, searchQuery).map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={() => dispatch(deleteContact(contact.id))}
              id={contact.id}
            ></ContactItem>
          ))
        : 'Loading'}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  padding: 0;
`;
