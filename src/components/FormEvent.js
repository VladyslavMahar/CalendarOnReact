import React from 'react';
import { AiOutlineCloseCircle, AiFillDelete } from "react-icons/ai";
import moment from 'moment';


const FormEvent = ({deleteEvent, setUpdateEvent, saveEvent, updateEvent, closeForm, nameOfMethod}) => {


const addEvent = () => {
    if (updateEvent.title === '')
    alert('Title must be filled')
    else if (!updateEvent.date)
    alert('Date must be filled')
    else
    saveEvent({"title":updateEvent.title, "description":updateEvent.description, "date":updateEvent.date},updateEvent.id )
}

const dropEvent = () => deleteEvent(updateEvent.id)

const onChangeMethod = (value, input) => {
    setUpdateEvent(prevState => ({...prevState, 
    [input]:value}))
}

  return (
    <div onClick={closeForm} className='formEventBlock'>
        
        <form onClick={e => e.stopPropagation()}
         className='formEvent'>
            <span className='titleForm'>{nameOfMethod} event</span>

            <AiOutlineCloseCircle  onClick={closeForm} className='closeIcon'/>

            <input value={updateEvent.title} className='title' type='text' placeholder='Title' required
            onChange={e=>onChangeMethod(e.target.value, 'title')}></input>

            <textarea value={updateEvent.description} className='description' placeholder='Description'
            onChange={e=>onChangeMethod(e.target.value, 'description')}></textarea>

            <input value={moment.unix(updateEvent.date/1000).format('yyyy-MM-DDThh:mm')}
             className='dateEvent' type='datetime-local' required
            onChange={e=>onChangeMethod(Date.parse(e.target.value), 'date')}></input>

            {nameOfMethod === 'Update' ?
             <AiFillDelete className='btnDelete' onClick={dropEvent}/> :
              null}

            <button type='button' onClick={addEvent} className='btnSave' >Save</button>        
        </form>
    </div>
    
  )
}

export default FormEvent
