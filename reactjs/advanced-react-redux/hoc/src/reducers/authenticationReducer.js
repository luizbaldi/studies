import { CHANGE_AUTH } from '../actions/types'

export default (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
    default:
      return state
  }
}
