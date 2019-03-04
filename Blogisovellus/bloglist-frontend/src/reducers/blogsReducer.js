import blogService from '../services/blogs'


const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_BLOGS':
            return action.data

        case 'SET_BLOGS':
            state = action.data
            return state

        case 'CREATE_NEW':
            const addBlog = {...action.data}
            state = state.concat(addBlog)
            return state

        case 'VOTE':
            state = state.map(blog => blog.id !== action.data.id ? blog : action.data)

            return state

        case 'REMOVE':
            state = state.filter(blog => blog.id !== action.data)
            return state

        default:
            return state
    }
}

export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        blogs.sort((a, b) => b.likes - a.likes)
        dispatch({
            type: 'INIT_BLOGS',
            data: blogs
        })
    }
}

export const addBlog = (BlogToAdd) => {
    return async dispatch => {
        const newBlog = await blogService.create(BlogToAdd)
        dispatch({
            type: 'CREATE_NEW',
            data: newBlog
        })
    }
}


export const likeBlog = (id) => {
    return async dispatch => {

        const likedBlog = await blogService.getById(id)
        const votedBlog = {
            title: likedBlog.title,
            author: likedBlog.author,
            id: likedBlog.id,
            url: likedBlog.url,
            user: likedBlog.user,
            likes: likedBlog.likes + 1
        }
        const response = await blogService.update(votedBlog)
        dispatch({
            type: 'VOTE',
            data: response
        })
    }
}


export const removeBlog = (id) => {
    console.log(id);
    return async dispatch => {
        await blogService.remove(id)

        dispatch({
            type:'REMOVE',
            data:id
        })

    }
    

    
}

export default blogsReducer