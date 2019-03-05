import React from 'react'
import LogOutWindow from './LogOutWindow'

const OneUserWindow = ({user}) => {
    console.log(user);
    if(user=== undefined || user.name===undefined ){
        return null
    }
    
    return(
        <div>
        <LogOutWindow/>
        <h2>{user.name}</h2>
        <h3>added blogs</h3>
        <Blogs user={user}/>
        </div>
    )
}

const Blogs  = ({user}) => {
    console.log(user);
    
    if(user=== undefined || user.name===undefined ){
        return null
    }

    if(user.blogs.length===0){
        return(
            <div>
                Ei blogeja
            </div>
        )
    }
    return(
        <div>
            {user.blogs.map(
                blog=> {
                    return(
                        <li key={blog.title}>
                            {blog.title}
                        </li>
                    )
                }
            )}
        </div>
    )
}


export default OneUserWindow