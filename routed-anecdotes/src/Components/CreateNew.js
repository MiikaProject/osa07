import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const CreateNew = (props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')

    
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.setNotification(`a new anecdote ${content} created!`)
      setTimeout(() => {
        props.setNotification("")
      }, 10000);
      props.addNew({
        content,
        author,
        info,
        votes: 0
      })
      props.history.push('/')
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            author
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
  }

  const CreateNewHistory = withRouter(CreateNew)
  export default CreateNewHistory