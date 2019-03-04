import React from 'react'
import { connect } from 'react-redux'

const Viestikentta = (props) => {
    
    
    const notification = props.notification
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


const mapStateToProps = (state) => {
    return {
      blogs : state.blogs,
      notification : state.notification,
      userglobal : state.user
    }
  }
  
const ConnectedViestikentta = connect(mapStateToProps)(Viestikentta)

export default ConnectedViestikentta