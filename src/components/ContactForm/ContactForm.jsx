import PropTypes from 'prop-types';
import { IoPersonAdd } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button, Form, Input, LabelName } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleNameChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <LabelName htmlFor={nameInputId}>Name</LabelName>
      <Input
        id={nameInputId}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <LabelName htmlFor={numberInputId}>Number</LabelName>
      <Input
        id={numberInputId}
        type="tel"
        name="number"
        value={number}
        onChange={handleNameChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">
        Add contact
        <IoPersonAdd style={{ paddingLeft: '10px' }} />
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
