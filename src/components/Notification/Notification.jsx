import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export default function Notificalion({ message }) {
  return <Message>{message}</Message>;
}

Notificalion.propTypes = {
  message: PropTypes.string.isRequired,
};
