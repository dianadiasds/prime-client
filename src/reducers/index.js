import {FETCH_PRIME_NUMBERS, FETCH_PRIME_NUMBERS_BAD_REQUEST} from '../actions/primeNumbersList';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_PRIME_NUMBERS:
      return action.payload;
    case FETCH_PRIME_NUMBERS_BAD_REQUEST:
      return {
        errorMessage: action.errorMessage
      };
    default:
      return state
  }
};
export default reducer
