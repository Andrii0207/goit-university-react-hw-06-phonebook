import { FaAddressBook } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from '../redux/selectors';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Notificalion from './Notification/Notification';
import Filter from './Filter/Filter';
import { ContactListTitle, Title, Wrapper } from './App.styled';

export function App() {
  const contactsRedux = useSelector(getContacts);

  return (
    <Wrapper>
      <Title>
        Phonebook
        <FaAddressBook />
      </Title>
      <ContactForm />

      <ContactListTitle>Contacts</ContactListTitle>
      <Filter />
      <>
        {contactsRedux.contacts.length !== 0 ? (
          <ContactList contacts={contactsRedux.contacts} />
        ) : (
          <Notificalion message="There are no any contacts" />
        )}
      </>
      <ToastContainer />
    </Wrapper>
  );
}
