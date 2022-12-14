import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/FilterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    setFilter: (value) =>  {
      dispatch(setFilter(value))
    }
  }
}



export default connect(
  null,
  mapDispatchToProps
)(Filter)