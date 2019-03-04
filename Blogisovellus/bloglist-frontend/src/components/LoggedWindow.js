import React from 'react'
import blogService from '../services/blogs'
import Addwindow from './Addwindow'
import BlogList from './Bloglist'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'
import Viestikentta from './Viestikentta';


const LoggedWindow = ({ blogs, user, setUser, setBlogs,  store }) => {

  //logout
  const clicked = () => {
    window.localStorage.clear()
    setUser(null)
    blogService.setToken(null)
  }

  const blogFormRef = React.createRef()
  return (
    <div>

      <h2>blogs</h2>
      <Viestikentta store={store} />
      <p> {user.name}  logged in</p>
      <button onClick={clicked}>logout</button>
      <Toggleable buttonLabel="create new" ref={blogFormRef}>
      <Addwindow blogs={blogs} setBlogs={setBlogs}  blogFormRef={blogFormRef} store={store} />
      </Toggleable>
      <BlogList blogs={blogs} setBlogs={setBlogs} user={user} />
    </div>
  )
}

LoggedWindow.propTypes = {
  setBlogs: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,


}

export default LoggedWindow