import React from 'react'
import { connect } from 'react-redux'
import LogOutWindow from './LogOutWindow'
import { likeBlog, removeBlog } from '../reducers/blogsReducer'

const OneBlogWindow = (props) => {
    console.log(props.blog);
    console.log(props);
    
    const blog = props.blog

    const handleLike = async () => {
        props.likeBlog(blog.id)
      }

    if(blog===undefined){
        return null
    }
    
    return (
        <div>
        
        <h2>{blog.title}</h2>
        <div>{blog.url}</div>
        <span><Tykkaykset blog={blog} />  <button onClick={handleLike}>like</button> </span>
        <div>added by {blog.user.username}</div>
        <CommentRender comments={blog.comments}/>


        </div>
    )
}

const Tykkaykset = ({blog}) => {
    
    if(blog.likes===null || blog.likes===undefined){
      return(
        <span>no likes</span>
      )
    }
    return(
      <span>{blog.likes} likes</span>
    )
  }

  const CommentRender = ({comments}) => {
    console.log(comments);
    
    return(
      <div>
        <h3>comments</h3>
        {comments.map(comment => {
          return(
            <li key={comment}>{comment}</li>
          )
        })}
      </div>
    )
  }




const mapStateToProps = (state) => {
    return {
      blogs : state.blogs,
      notification : state.notification,
      userglobal : state.user
    }
  }
  
  const mapDispatchToProps = {
    likeBlog, removeBlog
  }

const ConnectedOneBlogWindow = connect(mapStateToProps,mapDispatchToProps)(OneBlogWindow)
export default ConnectedOneBlogWindow