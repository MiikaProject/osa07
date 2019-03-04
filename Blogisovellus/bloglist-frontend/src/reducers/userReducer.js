import BlogService from '../services/blogs'


const userReducer = (state='', action) => {
    
    switch (action.type){

        case 'SET_USER':
        state = action.data
        return state

        case 'CLEAR_USER':
        state=''
        return state

        default:
        return state
    }
}

//asentaa localstoragen,asettaa tokenin, asettaa stateen userin
export const setUserGlobal = (user) => {
    
    return async dispatch => {
        await BlogService.setToken(user.token)
        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        dispatch({
            type:'SET_USER',
            data: user
        })
    }
}

//tyhjentaa localstoragen, tyhnetaa tokenin, tyhjentaa state userin
export const clearGlobalUser = () => {
    return async dispatch => {
        window.localStorage.clear()
        await BlogService.setToken(null)
        dispatch({
            type:'CLEAR_USER'
        })
    }
}


export default userReducer