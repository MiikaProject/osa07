import React from 'react'
import { connect } from 'react-redux'
import { clearGlobalUser } from '../reducers/userReducer'
import {
  Link
} from 'react-router-dom'

const Users = (props) => {
  
  if(props.users===undefined){
    return(null)
  }
  return (
    <div>
      <h2>blogs</h2>
      <p> {props.userglobal.name} logged in</p>
      <button onClick={() => props.clearGlobalUser()}>logout</button>
      <h2>Users</h2>
      <div>
      <UserTable users={props.users}/>
      </div>
      
    </div>

  )
}

const UserTable = (props) => {
  return(
    <table>
      <tbody>
      <tr>
        <th></th>
        <th>Blogs created</th>
      </tr>

      {props.users.map(user => {
      
        
    const userUrl=`users/${user.id}`
    return(
      <tr key={user.id}>
      <Link to={userUrl}>
      <th onClick={() => console.log('toimii')}>{user.username}</th>
      </Link>
      <th>{user.blogs.length}</th>
      </tr>
    )
  }
    )}
      
      </tbody>
    </table>
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
  clearGlobalUser
}
const ConnectedUsers = connect(mapStateToProps,mapDispatchToProps)(Users)
export default ConnectedUsers