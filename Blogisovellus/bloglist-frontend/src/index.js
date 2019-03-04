import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import { Provider } from 'react-redux'
import store from './store'



const renderApp = () => {
    ReactDOM.render(
      <App store={store}/>,
      document.getElementById('root')
    )
  }
  
  renderApp()
  store.subscribe(renderApp)

