import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store'

const backGroundStyle = {
    backgroundColor: "lightblue",
    height:"100vh",
    position:"relative"
}


ReactDOM.render(
  <div style={backGroundStyle}>
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
document.getElementById('root'))

