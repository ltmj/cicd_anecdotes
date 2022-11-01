import anecdoteService from '../services/anecdotes'
const AnecdoteReducer = (state = [], action) => {

  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToVote = state.find(an => an.id === id)
      const changedAnecdote =  {
        ...anecdoteToVote, votes: anecdoteToVote.votes + 1
      }
      return state.map(
        anec => anec.id !== id ? anec: changedAnecdote
      )
    }

    case 'NEW':{
      return [...state, action.data]
    }

    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const createVote = ( anecdote ) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.voteAnecdote( anecdote )
    dispatch({
      type: 'VOTE',
      data: newAnecdote
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch({
      type:'NEW',
      data: newAnecdote
    })
  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type:'INIT',
      data: anecdotes
    })
  }
}

export default AnecdoteReducer