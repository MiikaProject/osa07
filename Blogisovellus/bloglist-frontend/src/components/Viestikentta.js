import React from 'react'

const Viestikentta = ({ store }) => {

    const notification = store.getState().notification
    const viestiStyle = {
        color: notification.type ==='error' ? 'red' : 'green',
        borderSize: 2,
        borderColor: notification.type ==='error' ? 'red' : 'green',
        borderStyle: 'solid',
        borderRadius: '5px',
        backgroundColor: 'lightgrey',
        padding: '5px',
        fontSize: 30
    }
 
    if(notification.content===null || notification.content===''){
        return(
            null
        )
    }
    return(
        <div style={viestiStyle}>{notification.content}</div>
    )
}

export default Viestikentta