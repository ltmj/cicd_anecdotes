import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/AnecdoteReducer'
import { setMessage } from '../reducers/NotificationReducer'


const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.setMessage(`added "${content}"`,5)
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        createAnecdote: (value) => {
            dispatch(createAnecdote(value))
        },
        setMessage: (value, length) => {
            dispatch(setMessage(value,length))
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)