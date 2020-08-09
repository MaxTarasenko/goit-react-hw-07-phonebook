import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('todos/fetchContactsRequest');
export const fetchContactsSuccess = createAction('todos/fetchContactsSuccess');
export const fetchContactsError = createAction('todos/fetchContactsError');

export const addContactRequest = createAction('todos/addContactRequest');
export const addContactSuccess = createAction('todos/addContactSuccess');
export const addContactError = createAction('todos/addContactError');

export const deleteContactRequest = createAction('todos/deleteContactRequest');
export const deleteContactSuccess = createAction('todos/deleteContactSuccess');
export const deleteContactError = createAction('todos/deleteContactError');

export const filterContacts = createAction('phoneBook/filterContacts');
