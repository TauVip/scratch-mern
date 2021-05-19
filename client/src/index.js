import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './App'
import rootReducer from './reducers'
import './styles/index.scss'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
