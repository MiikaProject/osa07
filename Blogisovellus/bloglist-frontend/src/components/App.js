import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import loginService from '../services/login'
import LoggedWindow from './LoggedWindow'
import Login from './login'
import { useField } from '../hooks/index'
import { setNotification, clearNotification } from '../reducers/notificationReducer'


const App = (props) => {
  const store = props.store
  console.log(store.getState());
  
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const name = useField('text')
  const salasana = useField('text')

  const propsName = {
    value:name.value,
    onChange:name.onChange
  }
  const propsSalasana = {
    value:salasana.value,
    onChange:salasana.onChange
  }

  useEffect(() => {
    blogService.getAll().then(blogs => {
      blogs.sort((a, b) => b.likes - a.likes)
      setBlogs(blogs)
    }
    )
  }, [])

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

      const viesti = {
        type: 'error',
        content: `käyttäjätunnus tai salasana virheellinen'`
      }
      store.dispatch(
        setNotification(viesti)
      )

      setTimeout(() => {
        store.dispatch(
          clearNotification()
        )
      }, 5000)
    }

  }
  if (user === null) {
    return (
      <div>
        
          <Login handleLogin={handleLogin} setUsername={setUsername} username={username} name={propsName} salasana={propsSalasana} store={store} />
        
      </div>
    )
  }

  return (
    <div>
      <LoggedWindow blogs={blogs} user={user} setUser={setUser} setBlogs={setBlogs} store={store} />
    </div>
  )
}

export default App