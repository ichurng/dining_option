import React from 'react'
import { useState } from 'react'

const Randomize = ({restaurants}) => {

    const [randomChoice, setRandomChoice] = useState(restaurants[Math.floor(Math.random() * restaurants.length)].text)

    return (
    <div>
        <h3 className='task'>{randomChoice}</h3>
        <input type="submit" value="Shuffle" className="btn btn-block" 
        onClick={() => setRandomChoice(restaurants[Math.floor(Math.random() * restaurants.length)].text)}
        />
    </div>
  )
}

export default Randomize