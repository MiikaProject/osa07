import React from 'react'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Menu = () => {
    const padding = {
        paddingRight: 5
    }
    return (

        <div>
            <Link style={padding} to="/">anecdotes</Link>
            <Link style={padding} to="/create">create new</Link>
            <Link style={padding} to="/about">about</Link>

        </div>

    )
}


export default Menu