import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import contactsOperation from './redux/contacts/contacts-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
});

export default connect(null, mapDispatchtoProps)(App);
