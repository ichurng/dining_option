import React from 'react'
import {useState} from 'react'


const AddRestaurant = ({onAdd}) => {
    const[text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add Restaurant')
            return
        }
        onAdd({text})
        setText('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Restaurant</label>
            <input 
                type="text" 
                placeholder='Add Restaurant'
                value={text}
                onChange={(e) => setText(e.target.value)}
             />
        </div>
        <input type="submit" value="Add Restaurant" className="btn btn-block"/>
    </form>
  )
}

export default AddRestaurant