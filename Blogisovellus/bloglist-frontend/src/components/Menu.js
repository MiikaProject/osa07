import React from 'react'
import { connect } from 'react-redux'
import {
    Link
  } from 'react-router-dom'
import {clearGlobalUser} from '../reducers/userReducer'

const Menu = (props) => {
    return(
        <div>
            <Link to="/blogs" >blogs</Link>
            <Link to= "/users" > users</Link>
            <span> {props.userglobal.username} logged in </span>
            <button onClick={() => props.clearGlobalUser()}>logout</button>
            <div><h2>blog app</h2></div>
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

const ConnectedMenu = connect(mapStateToProps,mapDispatchToProps)(Menu)

export default ConnectedMenu