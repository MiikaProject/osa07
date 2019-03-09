import React from 'react'
import { connect } from 'react-redux'
import {
    Link
  } from 'react-router-dom'
import {clearGlobalUser} from '../reducers/userReducer'

const Menu = (props) => {

    const menuStyle = {
        color:"blue",
        backgroundColor: "powderblue",
        borderRadius:"2",
        
    }
    
    const menuItem = {
        padding:"5px"
    }

    const titleItem ={
        padding:"20px"
    }


    return(
        <div style={menuStyle}>
            <span style={menuItem}><Link style={menuItem} to="/blogs" >blogs</Link></span>
            <span style={menuItem}><Link to= "/users" > users</Link></span>
            <span style={menuItem}> {props.userglobal.username} logged in </span>
            <button onClick={() => props.clearGlobalUser()}>logout</button>
            <div style={titleItem}><h2>blog app</h2></div>
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