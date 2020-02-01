import PropTypes from 'prop-types';

const contact = PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.number,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phone: PropTypes.string
});

const contacts = PropTypes.arrayOf(contact);

const selectedContact = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  });

export default {
    ...PropTypes,
    contacts,
    contact,
    selectedContact
}