import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import loginService from '../services/login'
import LoggedWindow from './LoggedWindow'
import Login from './login'
import { useField } from '../hooks/index'
import { setNotification } from '../reducers/notificationReducer'
import { initializeBlogs } from '../reducers/blogsReducer'
import { initializeUsers } from '../reducers/usersReducer'
import { setUserGlobal } from '../reducers/userReducer'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import Users from '../components/Users'
import OneUserWindow from '../components/OneUserWindow'
import OneBlogWindow from '../components/OneBlogWindow'


const App = (props) => {
 
 
  const name = useField('text')
  const salasana = useField('text')

  //asettaa blogit ja käyttäjät stateen
  useEffect(()  => {
    props.initializeBlogs()
    props.initializeUsers()
    
    
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

  const userById = (id) =>
  props.users.find(user => user.id ===id)

  const blogById = (id) =>
  props.blogs.find(blog => blog.id ===id)
  

  return (
    <Router>
    <div>

      <Route exact path="/" render ={() => <LoggedWindow/>}/>
      <Route exact path="/users" render={() => <Users/>} />
      <Route exact path="/blogs" render={()=> <LoggedWindow/> }/>
      <Route exact path="/users/:id" render= {({match}) => 
      <OneUserWindow user={userById(match.params.id)}/>
      }/>
      <Route exact path="/blogs/:id" render= {({match}) => 
      <OneBlogWindow blog={blogById(match.params.id)}/>
      }/>
      </div>

    
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs : state.blogs,
    notification : state.notification,
    userglobal : state.user,
    users : state.users
  }
}

const mapDispatchToProps = {
  initializeBlogs, setNotification, setUserGlobal ,initializeUsers
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp