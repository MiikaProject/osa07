import React from 'react'
import { connect } from 'react-redux'
import { clearGlobalUser } from '../reducers/userReducer'
import Viestikentta from './Viestikentta'

const logOutWindow = (props) => {
    console.log(props);

    return (
        <div>
            <h2>blogs</h2>
            <Viestikentta />
            <p> {props.userglobal.username} logged in</p>
            <button onClick={() => props.clearGlobalUser()}>logout</button>
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

const ConnectedLogOutWindow = connect(mapStateToProps, mapDispatchToProps)(logOutWindow)
export default ConnectedLogOutWindow