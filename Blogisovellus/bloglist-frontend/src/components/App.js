import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import loginService from '../services/login'
import LoggedWindow from './LoggedWindow'
import Login from './login'
import { useField } from '../hooks/index'
import { setNotification } from '../reducers/notificationReducer'
import { initializeBlogs } from '../reducers/blogsReducer'


const App = (props) => {
 
  console.log(props);
  
  
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
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
      setUser(user)
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
      setUser(user)
      setUsername('')
      name.reset()
      salasana.reset()
      

    } catch (expection) {
      console.log('käyttäjätunnus tai salasana virheellinen')
      props.setNotification('error', `käyttäjätunnus tai salasana virheellinen`,5)
    }

  }
  if (user === null) {
    return (
      <div>
        
          <Login handleLogin={handleLogin} setUsername={setUsername} username={username} name={propsName} salasana={propsSalasana}  />
        
      </div>
    )
  }

  return (
    <div>
      <LoggedWindow user={user} setUser={setUser}  />
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
  initializeBlogs, setNotification
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp