import * as actionTypes from '../actions/ActionTypes';

export default (state = [], action) => {
  console.log('reducer', action);
  switch(action.type) {
    case actionTypes.ADD_CONTACTS:
    return [];
    case actionTypes.DELETE_CONTACT:
    return [];
    default: return state;
  }
}

