import PropTypes, { exact } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import style from './contactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.listItem}>
        <p>
          <span>
            {name}: {number}
          </span>
          <button className={style.button} onClick={() => onDelete(id)}>
            Delete
          </button>
        </p>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchtoProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
