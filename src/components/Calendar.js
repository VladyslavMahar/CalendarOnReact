import React from 'react'
import CalendarItem from './CalendarItem'



const Calendar = ( {firstDay, today, events, openForm} ) => {
    
    const day = firstDay.clone().subtract(1,'day')
    const arrCalendar = [...Array(42)].map(() => day.add(1, 'day').clone())
    
  return (
    <div className='calendar'>
      {arrCalendar.map((Item) => (
        <CalendarItem openForm={openForm} key = {Item.format('DD-MM-YYYY')} 
        Item = {Item} today={today} events={events} />
      ))}
    </div>
  )
}

export default Calendar
