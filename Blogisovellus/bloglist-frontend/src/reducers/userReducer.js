



const userReducer = (state='', action) => {
    switch (action.type){

        case 'SET_USER':
        console.log(action.data);
        
        state = action.data
        return state

        case 'CLEAR_USER':
        console.log('clearuser toimii');
        
        state=''
        return state

        default:
        return state
    }


 

}

export const setUserGlobal = (user) => {
    console.log('juttu toimii');
    console.log('user',user);
    
    
    return dispatch => {
        dispatch({
            type:'SET_USER',
            data: user
        })
    }
}

export const clearGlobalUser = () => {
    console.log('clear toimii');
    return dispatch => {
        dispatch({
            type:'CLEAR_USER'
        })
    }
    
}


export default userReducer