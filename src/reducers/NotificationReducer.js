const notificationReducer = (state = 'empty', action) => {
    switch(action.type){
        case 'SET_MESSAGE':
            return action.message
        default:
            return state
    }
}

export const setMessage = (message, length) => {

    var id = setTimeout(() => {}, 0)
    while(id--){
        clearTimeout(id)
    }
    return async dispatch => {
        dispatch({
            type:'SET_MESSAGE',
            message
        })
        setTimeout(() => {
            dispatch({ type:'SET_MESSAGE', message:'empty' })
        }, length*1000)
    }
}

export default notificationReducer