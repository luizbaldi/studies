import shortid from 'shortid'
import { SAVE_COMMENT } from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      const newComment = { id: shortid.generate(), text: action.payload }
      return [ ...state, newComment ]
    default:
      return state
  }
}
