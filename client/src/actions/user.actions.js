import axios from 'axios'

export const GET_USER = 'GET_USER'
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE'
export const UPDATE_BIO = 'UPDATE_BIO'
export const FOLLOW_USER = 'FOLLOW_USER'
export const UNFOLLOW_USER = 'UNFOLLOW_USER'

export const getUser = uid => dispatch =>
  axios
    .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
    .then(res => dispatch({ type: GET_USER, payload: res.data }))
    .catch(err => console.log(err))

export const uploadPicture = (data, id) => dispatch =>
  axios
    .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
    .then(
      async res =>
        await axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
          .then(res =>
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture })
          )
    )
    .catch(err => console.log(err))

export const updateBio = (userId, bio) => dispatch =>
  axios({
    method: 'put',
    url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
    data: { bio }
  })
    .then(() => dispatch({ type: UPDATE_BIO, payload: bio }))
    .catch(err => console.log(err))

export const followUser = (followerId, idToFollow) => dispatch =>
  axios({
    method: 'patch',
    url: `${process.env.REACT_APP_API_URL}api/user/follow/${followerId}`,
    data: { idToFollow }
  })
    .then(() => dispatch({ type: FOLLOW_USER, payload: { idToFollow } }))
    .catch(err => console.log(err))

export const unfollowUser = (followerId, idToUnfollow) => dispatch =>
  axios({
    method: 'patch',
    url: `${process.env.REACT_APP_API_URL}api/user/unfollow/${followerId}`,
    data: { idToUnfollow }
  })
    .then(() => dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } }))
    .catch(err => console.log(err))
