import PropTypes from 'prop-types';
import { FaDeleteLeft } from 'react-icons/fa6';

import {
  ButtonDelete,
  ContactItem,
  ContactListWrapper,
} from './ContactList.styled';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ButtonDelete type="button" onClick={() => onDelete(id)}>
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
