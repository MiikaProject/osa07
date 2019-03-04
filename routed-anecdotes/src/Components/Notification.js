import React, { useState } from 'react'

const Notification = ({notification}) => {
    

    if(notification===""){
        return(
            <div display="none">

            </div>
        )
    } else {
        return(
            <div>{notification}</div>
        )
    }
    
}


export default Notification