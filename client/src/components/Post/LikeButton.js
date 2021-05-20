import { useContext, useEffect, useState } from 'react'
import { UidContext } from '../AppContext'

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const uid = useContext(UidContext)

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true)
  }, [post.likers, uid])

  return <div className='like-container'>LikeButton</div>
}
export default LikeButton
