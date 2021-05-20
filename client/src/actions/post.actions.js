import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'

export const getPosts = () => dispatch =>
  axios
    .get(`${process.env.REACT_APP_API_URL}api/post/`)
    .then(res => dispatch({ type: GET_POSTS, payload: res.data }))
    .catch(err => console.log(err))
