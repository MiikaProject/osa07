import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import Menu from './Components/Menu'
import Anecdote from './Components/Anecdote'
import AnecdoteList from './Components/AnecdoteList'
import About from './Components/About'
import CreateNew from './Components/CreateNew'
import Footer from './Components/Footer'
import Notification from './Components/Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }
  
  

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Router>
    <div>
      <h1>Software anecdotes</h1>
      <Menu/>      
      <Notification notification={notification}/>
      <Route exact path="/" render={() => <AnecdoteList anecdotes={anecdotes} />} />
      <Route path="/create" render={()=> <CreateNew addNew={addNew} setNotification={setNotification}/>}/>
      <Route path="/about" render={()=> <About/>} />
      <Route exact path="/anecdotes/:id" render= {({ match }) =>
      <Anecdote anecdote={anecdoteById(match.params.id)} />
    } />
      <Footer/>
    </div>
    </Router>
  )
}

export default App;