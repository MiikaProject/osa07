import React, { useState } from 'react'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import { addBlog } from '../reducers/blogsReducer'

const Addwindow = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  //Ikkuna blogin lisäämistä varten
  const handleAddBlog = (event) => {
    event.preventDefault()
    props.blogFormRef.current.toggleVisibility()
    const BlogObject = {
      title: title,
      author: author,
      url: url
    }
    props.addBlog(BlogObject)
    props.setNotification(null,`added ${title}`,5)
    setAuthor('')
    setTitle('')
    setUrl('')
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  return (
    <div>

      <form onSubmit={handleAddBlog}>

        <div>
          title:
            <input value={title} onChange={handleTitleChange}>
          </input>
        </div>

        <div>
          author:
            <input value={author} onChange={handleAuthorChange}>
          </input>
        </div>

        <div>
          url:
            <input value={url} onChange={handleUrlChange}>
          </input>
        </div>
        <div>
          <button>lisää blogi</button>
        </div>
      </form>

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
  addBlog,
  setNotification,
  clearNotification
}

const ConnectedAddWindow = connect(mapStateToProps, mapDispatchToProps)(Addwindow)
export default ConnectedAddWindow