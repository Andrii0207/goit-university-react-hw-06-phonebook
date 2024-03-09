import { useEffect, useState } from 'react';
import { FaAddressBook } from 'react-icons/fa6';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Notificalion from './Notification/Notification';
import Filter from './Filter/Filter';
import { ContactListTitle, Title, Wrapper } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(
      item =>
        item.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    )
      ? alert(`${name} already is in contacts`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handlerFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      <Title>
        Phonebook
        <FaAddressBook />
      </Title>
      <ContactForm onSubmit={addContact} />

      <ContactListTitle>Contacts</ContactListTitle>
      <Filter value={filter} onChange={handlerFilter} />
      <>
        {contacts.length !== 0 ? (
          <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        ) : (
          <Notificalion message="There are no any contacts" />
        )}
      </>
    </Wrapper>
  );
}
