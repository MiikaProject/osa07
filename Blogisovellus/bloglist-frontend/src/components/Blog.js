import React, { useState } from 'react'
import { connect } from 'react-redux'
import { likeBlog, removeBlog } from '../reducers/blogsReducer'
import { setNotification } from '../reducers/notificationReducer'

const Blog = (props) => {
  //kuvaa kuinka suuri määrä infoa näytetään
  
  const blog = props.blog
  
  
  const [BigDisplay, setBigDisplay] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const Lisaaja = () => {
    if (blog.user === undefined || blog.user===null) {
      return (
        <div></div>
      )
    } else {
      return (
        <span>added by {blog.user.username}</span>
      )
    }

  }

  const Tykkaykset = () => {
    
    if(blog.likes===null || blog.likes===undefined){
      return(
        <span>no likes</span>
      )
    }
    return(
      <span>{blog.likes} likes</span>
    )
  }

  const toggleDisplay = () => {
    if (BigDisplay === true) {
      setBigDisplay(false)
    } else if (BigDisplay === false) {
      setBigDisplay(true)
    }
  }

  const handleLike = async () => {
    props.likeBlog(blog.id)
  }


  const handleRemove = async () => {
    const decision = window.confirm(`remove blog ${blog.title}`)

    if (decision === true) {
        props.removeBlog(blog.id)
        props.setNotification(null,`${blog.title} was removed`,5)
    } else {
      return
    }

  }

  if (BigDisplay === false) {
    return (
      <div style={blogStyle} className='pienitieto'>
        <div onClick={toggleDisplay} className='nimipalkki'>
          {blog.title} {blog.author}
        </div>

      </div>
    )
    
  } else {
    if (blog.user===null ||blog.user === undefined || blog.user.username !== props.userglobal.username) {
      return (
        <div style={blogStyle} className='isotieto'>
          <div onClick={toggleDisplay} className='nimipalkki'>
            <span>{blog.title} {blog.author}</span>
          </div>
          <div>{blog.url}</div>
          <div><Lisaaja /></div>
          <span><Tykkaykset/>  <button onClick={handleLike}>like</button> </span>
        </div>
      )
    }
    return (
      <div style={blogStyle} className='isotieto'>
        <div onClick={toggleDisplay} className='nimipalkki'>
          <span>{blog.title} {blog.author}</span>
        </div>
        <div>{blog.url}</div>
        <div><Lisaaja /></div>
        <span><Tykkaykset/>  <button onClick={handleLike}>like</button> </span>
        <div><button onClick={handleRemove}>remove</button></div>

      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    blogs : state.blogs,
    notification : state.notification,
    userglobal : state.user
  }
}

const mapDispatchToProps = {
  likeBlog, removeBlog, setNotification
}

const ConnectedBlog = connect(mapStateToProps, mapDispatchToProps)(Blog)
export default ConnectedBlog