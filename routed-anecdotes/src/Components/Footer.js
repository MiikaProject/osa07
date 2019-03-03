import React from 'react'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Footer = () => (
    <div>
      Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -sovelluskehitys</a>.
  
      See <a href='https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
    </div>
  )

  export default Footer