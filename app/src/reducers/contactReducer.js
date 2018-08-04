import * as actionTypes from '../actions/ActionTypes';

export default (state = [], action) => {
  
  switch(action.type) {
    case actionTypes.ADD_CONTACTS:
    return [
      ...state,
      Object.assign({}, action.contact)
    ];
    case actionTypes.DELETE_CONTACT:
    const result = state.filter((data, i) => i !== action.id)
    console.log('result',state);
    return result;
    default: return state;
  }
}

