import React from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import Addwindow from './Addwindow'
import BlogList from './Bloglist'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'
import Viestikentta from './Viestikentta';


const LoggedWindow = (props) => {
  
  //logout
  const clicked = () => {
    window.localStorage.clear()
    props.setUser(null)
    blogService.setToken(null)
  }

  const blogFormRef = React.createRef()
  return (
    <div>

      <h2>blogs</h2>
      <Viestikentta />
      <p> {props.user.name}  logged in</p>
      <button onClick={clicked}>logout</button>
      <Toggleable buttonLabel="create new" ref={blogFormRef}>
      <Addwindow  blogFormRef={blogFormRef}  />
      </Toggleable>
      <BlogList blogs={props.blogs} setBlogs={props.setBlogs} user={props.user} />
    </div>
  )
}

LoggedWindow.propTypes = {
  setUser: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    blogs : state.blogs,
    notification : state.notification,
    userglobal : state.user
  }
}

const ConnectedLoggedWindow = connect(mapStateToProps)(LoggedWindow)

export default ConnectedLoggedWindow