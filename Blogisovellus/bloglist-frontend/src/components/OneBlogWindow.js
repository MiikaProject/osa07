import React, { useState } from 'react'
import { connect } from 'react-redux'

import { likeBlog, removeBlog, initializeBlogs, setBlogs } from '../reducers/blogsReducer'
import BlogService from '../services/blogs'

const OneBlogWindow = (props) => {
  
  const blog = props.blog
  const handleLike = async () => {
    props.likeBlog(blog.id)
  }

  if (blog === undefined) {
    return null
  }

  return (
    <div>

      <h2>{blog.title}</h2>
      <div>{blog.url}</div>
      <span><Tykkaykset blog={blog} />  <button onClick={handleLike}>like</button> </span>
      <div>added by {blog.user.username}</div>
      <CommentRender blog={blog} setBlogs={props.setBlogs} blogs={props.blogs} />


    </div>
  )
}

const Tykkaykset = ({ blog }) => {

  if (blog.likes === null || blog.likes === undefined) {
    return (
      <span>no likes</span>
    )
  }
  return (
    <span>{blog.likes} likes</span>
  )
}

const CommentRender =  (props) => {
  const blog = props.blog
  const [comment, setComment] = useState('')

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleAddComment = async (event) => {
    event.preventDefault()
    const uusiBlogi = await BlogService.addComment(blog.id, comment)
    
    const newBlogs = props.blogs.map(nblog => {
      if (nblog.id !== blog.id) {
        
        return nblog
      } else {
        return uusiBlogi
      }
    })
    props.setBlogs(newBlogs)
  }

  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={handleAddComment}>
      <input onChange={handleCommentChange}></input><button>add comment</button>

    </form>
      {props.blog.comments.map(comment => {
        return (
          <li key={comment}>{comment}</li>
        )
      })}
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
  likeBlog, removeBlog, initializeBlogs, setBlogs
}

const ConnectedOneBlogWindow = connect(mapStateToProps, mapDispatchToProps)(OneBlogWindow)
export default ConnectedOneBlogWindow