import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import loginService from '../services/login'
import LoggedWindow from './LoggedWindow'
import Login from './login'
import { useField } from '../hooks/index'
import { setNotification } from '../reducers/notificationReducer'
import { initializeBlogs } from '../reducers/blogsReducer'
import { setUserGlobal } from '../reducers/userReducer'


const App = (props) => {
 
  const name = useField('text')
  const salasana = useField('text')

  useEffect(() => {
    props.initializeBlogs()
  }, [])

  const propsName = {
    value:name.value,
    onChange:name.onChange
  }
  const propsSalasana = {
    value:salasana.value,
    onChange:salasana.onChange
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUserGlobal(user)
      
      blogService.setToken(user.token)
    }


  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('loggaa', name.value, salasana.value)
    const username = name.value
    const password = salasana.value
    try {
      const user = await loginService.login({
        username, password
      })
      
      
      
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      props.setUserGlobal(user)
      
      
      name.reset()
      salasana.reset()
      

    } catch (expection) {
      console.log('käyttäjätunnus tai salasana virheellinen')
      props.setNotification('error', `käyttäjätunnus tai salasana virheellinen`,5)
    }

  }
  if (props.userglobal === null || props.userglobal==='') {
    return (
      <div>
        
          <Login handleLogin={handleLogin}  name={propsName} salasana={propsSalasana}  />
        
      </div>
    )
  }

  return (
    <div>
      <LoggedWindow />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs : state.blogs,
    notification : state.notification,
    userglobal : state.user
  }
}

const mapDispatchToProps = {
  initializeBlogs, setNotification, setUserGlobal
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp