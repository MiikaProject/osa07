import React from 'react'
import { connect } from 'react-redux'
import { clearGlobalUser } from '../reducers/userReducer'
import {
  Link
} from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Users = (props) => {
  
  if(props.users===undefined){
    return(null)
  }
  return (
    <div>
      
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
    <Table striped>
      <tbody>
      <tr>
        <th></th>
        <th>Blogs created</th>
      </tr>

      {props.users.map(user => {
      
        
    const userUrl=`users/${user.id}`
    return(
      <tr key={user.id}>
      <th>
      <Link to={userUrl}>
      <div onClick={() => console.log('toimii')}>{user.username}</div>
      </Link>
      </th>
      <th>{user.blogs.length}</th>
      </tr>
    )
  }
    )}
      
      </tbody>
    </Table>
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