import * as request from 'superagent';

export const FETCH_PRIME_NUMBERS = 'FETCH_PRIME_NUMBERS';

export function setPrimeNumbers(payload) {
    return {
        type: FETCH_PRIME_NUMBERS,
        payload: payload,
    }
}

export function getPrimeNumbers(number) {
    return function (dispatch) {
        request(`http://localhost:5000/${number}`)
            .then(res => {
                dispatch(setPrimeNumbers(res.body))
            })
            .catch(console.error)

    }
}
