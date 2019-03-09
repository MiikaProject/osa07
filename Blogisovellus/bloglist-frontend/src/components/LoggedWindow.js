import React from 'react'
import { connect } from 'react-redux'

import Addwindow from './Addwindow'
import BlogList from './Bloglist'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'

import { clearGlobalUser } from '../reducers/userReducer'


const LoggedWindow = (props) => {
    
  

  const blogFormRef = React.createRef()
  return (
    <div>

      
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