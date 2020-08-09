import React, { Component } from 'react';
import style from './contactForm.module.css';
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operations';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.onSubmit}>
        <h4>Name</h4>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          className={style.searchInput}
          required
        />
        <h4>Number</h4>
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
          className={style.searchInput}
          required
        />
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsOperation.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
