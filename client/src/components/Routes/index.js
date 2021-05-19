import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'
import Trending from '../../pages/Trending'
import Navbar from '../Navbar'

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/trending' exact component={Trending} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default index
