import React, { useState } from 'react'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import blogService from '../services/blogs'

const Addwindow = ({ setBlogs, blogs, blogFormRef, store }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
  
    //Ikkuna blogin lisäämistä varten
    const handleAddBlog = (event) => {
      event.preventDefault()
      blogFormRef.current.toggleVisibility()
      const BlogObject = {
        title: title,
        author: author,
        url: url
      }
  
      blogService.create(BlogObject)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          setAuthor('')
          setTitle('')
          setUrl('')
  
          const viesti = {
            type: '',
            content: `${title} was added`
          }
          store.dispatch(
            setNotification(viesti)
          )
  
          setTimeout(() => {
            store.dispatch(
              clearNotification()
            )
          }, 5000)
        })
        .catch(error => {
          console.log(error)
        })
  
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
  

  export default Addwindow