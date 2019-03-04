import React from 'react'
import { connect } from 'react-redux'
import { clearGlobalUser } from '../reducers/userReducer'

const Users = (props) => {
  console.log(props);

  return (
    <div>
      <h2>blogs</h2>
      <p> {props.userglobal.name} logged in</p>
      <button onClick={() => props.clearGlobalUser()}>logout</button>
      <h1>Users</h1>
      
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    notification: state.notification,
    userglobal: state.user
  }
}

const mapDispatchToProps = {
  clearGlobalUser
}
const ConnectedUsers = connect(mapStateToProps,mapDispatchToProps)(Users)
export default ConnectedUsers