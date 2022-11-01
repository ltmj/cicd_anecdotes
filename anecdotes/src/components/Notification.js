import { connect } from 'react-redux'
import React from 'react'



const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(props.notification !== 'empty'){
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  }
  return(
    <></>
  )
}

const mapStateToProps = (state) => {
  return{
    notification: state.notification
  }
}


const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification