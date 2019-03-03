import React from 'react'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'


const Anecdote = (anecdote) => {
    return(
        <div>
            <h2>{anecdote.content}</h2>
            <div>has {anecdote.votes} votes</div>
            <div>for more infromation see</div>
            <div>Anecdote app for ....</div>
        </div>
    )
}


export default Anecdote