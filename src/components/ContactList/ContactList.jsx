import { FaDeleteLeft } from 'react-icons/fa6';
import {
  ButtonDelete,
  ContactItem,
  ContactListWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilterValue } from '../../redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsRedux = useSelector(getContacts);
  const filterRedux = useSelector(getFilterValue);

  const visualContacts = contactsRedux.contacts.filter(item =>
    item.name.toLowerCase().includes(filterRedux.toLowerCase())
  );

  return (
    <ContactListWrapper>
      {visualContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <FaDeleteLeft
              style={{
                width: '20px',
                height: '20px',
              }}
            />
          </ButtonDelete>
        </ContactItem>
      ))}
    </ContactListWrapper>
  );
}
