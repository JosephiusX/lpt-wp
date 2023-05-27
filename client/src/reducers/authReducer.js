// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\client\src\reducers\authReducer.js

import { FETCH_USER } from '../actions/types';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // returns false if no payload is returned.
    default:
      return state;
  }
};

export default authReducer;