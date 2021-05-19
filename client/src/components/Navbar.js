import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'

const Navbar = () => {
  const uid = useContext(UidContext)

  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <NavLink exact to='/'>
            <div className='logo'>
              <img src='./img/icon.png' alt='icon' />
              <h3>Raccoont</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className='welcome'>
              <NavLink exact to='/profile'>
                <h5>Some text</h5>
              </NavLink>
            </li>
            Login Logout
          </ul>
        ) : (
          0
        )}
      </div>
    </nav>
  )
}
export default Navbar
