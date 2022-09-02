import React from 'react'
import moment from 'moment'

const CalendarItem = ({Item, today, events, openForm}) => {
  return (
    <div className={
            Item.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY') ?
        'todayItem':
        Item.format('MM-YYYY') !== today.format('MM-YYYY') ? 
        'anyMonthItem':
        'calendarItem' }>
        <div>{Item.format('D')}</div>
        <div>{Item.format('ddd')}</div>
        <div className='ItemTask'>
            {events.filter(
                event=> event.date >= Item.format('x') && event.date < Item.clone().add(1,'day').format('x')).map(
                    event=> (
                        <div onClick={() => openForm('Update', event)} className='event' key={event.id}>
                            <h5>{event.title}</h5>
                            <span>{event.description}</span>
                            </div>
                    ))}
        </div>
    </div>
  )
}

export default CalendarItem
