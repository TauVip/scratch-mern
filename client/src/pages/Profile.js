import { useContext } from 'react'
import { UidContext } from '../components/AppContext'
import Log from '../components/Log'
import UpdateProfile from '../components/Profile/UpdateProfile'

const Profile = () => {
  const uid = useContext(UidContext)

  return (
    <div className='profil-page'>
      {uid ? (
        <UpdateProfile />
      ) : (
        <div className='log-container'>
          <Log signin={false} signup={true} />
          <div className='img-container'>
            <img src='./img/log.svg' alt='img-log' />
          </div>
        </div>
      )}
    </div>
  )
}
export default Profile
