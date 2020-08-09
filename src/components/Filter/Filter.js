import PropTypes from 'prop-types';
import React from 'react';
import style from './filter.module.css';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <div className={style.blockFilter}>
    <span className={style.label}>Find contacts by name</span>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      className={style.inputFilter}
    ></input>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
