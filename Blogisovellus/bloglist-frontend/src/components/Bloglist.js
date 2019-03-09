import React from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'



const BlogList = (props) => {
  
  if(props.blogs===undefined || props.blogs ===null){
    return null
  } 
  if(props.blogs){
    return (
      <div>
        <Table size="sm" bordered striped hover >
        <tbody>
        {props.blogs.map(blog =>
        <tr key={blog.id}>
        <td>
          <Blog key={blog.id} blog={blog}  />
          </td>
          </tr>
        )}
        </tbody>
        </Table>
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