import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createVote } from '../reducers/AnecdoteReducer'
import { setMessage } from '../reducers/NotificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const vote = (an) => {
        dispatch(createVote({ ...an, votes:an.votes + 1 }))
        dispatch(setMessage(`vote given to "${an.content}"!`,5))
    }

    const sortByVotes = (a, b) => {
        if (a.votes <= b.votes) { return 1 }
        else { return -1 }
    }

    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if(filter === ''){
            return anecdotes
        }
        return anecdotes.filter(anecdote => anecdote.content.includes(filter))
    })

    return(
        <div>
            {anecdotes.sort(sortByVotes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )}
        </div>
    )

}

export default AnecdoteList