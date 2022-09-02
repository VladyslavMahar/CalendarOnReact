import React from 'react'
import { AiFillPlusCircle, AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";


const Header = ( {openForm, previosMonth, nextMonth, today, filterMonth} ) => {
    
const filterData = (date) => {
    filterMonth(date)
}

  return (
    <div className='header'>
        <AiFillPlusCircle onClick={() => openForm('Create')} className='addIcon'/>
        <div className='nav'>
            <AiOutlineArrowLeft className='arrow' onClick={previosMonth}/>
            <div>{today.format('MMMM-y')}</div>
            <AiOutlineArrowRight className='arrow' onClick={nextMonth}/>
            <input id='DP' type='date'  value={today.format('yyyy-MM-DD')}
                onChange={event =>filterData(Date.parse(event.target.value)) }>
            </input>
            
            
            
        </div>
        

    </div>
  )
}

export default Header
