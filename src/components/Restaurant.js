import React from 'react'

const Restaurant = ({restaurant}) => {
  return (
    <div className='task'>
        <h3>{restaurant.text}</h3>
    </div>
  )
}

export default Restaurant