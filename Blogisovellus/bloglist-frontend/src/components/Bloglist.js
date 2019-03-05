import React from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'


const BlogList = (props) => {
  
  if(props.blogs===undefined || props.blogs ===null){
    return null
  } 
  if(props.blogs){
    return (
      <div>
        {props.blogs.map(blog =>
          <Blog key={blog.id} blog={blog}  />
        )}
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

const ConnectedBlogList = connect(mapStateToProps)(BlogList)
export default ConnectedBlogList