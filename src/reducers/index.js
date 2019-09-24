import { FETCH_PRIME_NUMBERS } from '../actions/form';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case FETCH_PRIME_NUMBERS:
            return action.payload
        default:
            return state
    }
}
export default reducer