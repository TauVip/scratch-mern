import { GET_POSTS } from '../actions/post.actions'

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload
    default:
      return state
  }
}
