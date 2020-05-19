import {createStore} from 'redux';

const INITIAL_STATE = {
  isSignedIn: false,
};

function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SIGN_IN':
      return {
        ...state,
        isSignedIn: action.value,
      };
    default:
      return state;
  }
}

export default createStore(app);
