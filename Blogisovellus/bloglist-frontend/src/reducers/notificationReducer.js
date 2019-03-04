const initialState =
{
    type: '',
    content: ''
}

const notificationReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_NOTIFICATION':
            const newState = {
                type: action.data.type,
                content: action.data.content
            }
            state = newState
            return state


        case 'CLEAR_NOTIFICATION':
            const newState2 ={
                type:null,
                content:null
            }
            state=newState2
            return state

        default:
            return state
    }
}


export const setNotification = (message) => {
    return ({
        type: 'SET_NOTIFICATION',
        data: {
            type: message.type,
            content: message.content
        }
    }
    )
}

export const clearNotification = () => {
    return({
        type:'CLEAR_NOTIFICATION'
    }
    )
}


export default notificationReducer