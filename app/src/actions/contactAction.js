import * as actionTypes from './ActionTypes';

export const createContact = () => {
  return {
    type: actionTypes.ADD_CONTACTS,
  }
}

export const deleteContact = () => {
  return {
    type: actionTypes.DELETE_CONTACT,
  }
}