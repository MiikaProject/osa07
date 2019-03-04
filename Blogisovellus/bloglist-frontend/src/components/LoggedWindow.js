import React from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import Addwindow from './Addwindow'
import BlogList from './Bloglist'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'
import Viestikentta from './Viestikentta';
import { clearGlobalUser } from '../reducers/userReducer'


const LoggedWindow = (props) => {
    
  

  const blogFormRef = React.createRef()
  return (
    <div>

      <h2>blogs</h2>
      <Viestikentta />
      <p> {props.userglobal.username} logged in</p>
      <button onClick={() => props.clearGlobalUser()}>logout</button>
      <Toggleable buttonLabel="create new" ref={blogFormRef}>
      <Addwindow  blogFormRef={blogFormRef}  />
      </Toggleable>
      <BlogList/>
    </div>
  )
}

LoggedWindow.propTypes = {
  
  blogs: PropTypes.array.isRequired,
  
}

const mapStateToProps = (state) => {
  return {
    blogs : state.blogs,
    notification : state.notification,
    userglobal : state.user
  }
}

const mapDispatchToProps = {
  clearGlobalUser
}

const ConnectedLoggedWindow = connect(mapStateToProps, mapDispatchToProps)(LoggedWindow)

export default ConnectedLoggedWindow