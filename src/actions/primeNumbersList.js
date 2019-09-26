import * as request from 'superagent';

export const FETCH_PRIME_NUMBERS = 'FETCH_PRIME_NUMBERS';
export const FETCH_PRIME_NUMBERS_BAD_REQUEST = 'FETCH_PRIME_NUMBERS_BAD_REQUEST';

export function setPrimeNumbers(payload) {
  return {
    type: FETCH_PRIME_NUMBERS,
    payload: payload,
  }
}

const handleError = (error) => {
  const errorMessage = error.response.text;
  return {
    type: FETCH_PRIME_NUMBERS_BAD_REQUEST,
    errorMessage: errorMessage,
  }
};

export function getPrimeNumbers(currentState) {
  return function (dispatch) {
    request
      .get('https://prime-server.herokuapp.com/primenumber')
      .query({number: currentState.number})
      .query({pageSize: currentState.pageSize})
      .query({page: currentState.currentPage})
      .on('error', function (error) {
        console.log(error.response);
        dispatch(handleError(error));
      })
      .then(res => {
        dispatch(setPrimeNumbers(res.body))
      })
  }
}
