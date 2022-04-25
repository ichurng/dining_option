import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, onRandomize}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='steelblue' text='Add' onClick={onAdd}/>
        <Button color='steelblue' text='Randomize' onClick={onRandomize}/>
    </header>
  )
}

Header.defaultProps = {
    title: PropTypes.string
}

export default Header