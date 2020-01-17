import { FETCH_EMPLOYEES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
}