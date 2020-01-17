import { SAVE_COMMENT } from './actionTypes'

export const saveComment = (text) => ({
  type: SAVE_COMMENT,
  payload: text
})