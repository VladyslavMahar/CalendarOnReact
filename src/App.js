import moment from 'moment'
import { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import FormEvent from './components/FormEvent';
import Header from './components/Header';


function App() {
  
  // Зміна першого дня тижня на понеділок
moment.updateLocale('en', {week: {dow:1}})

const [today, setToday] = useState(moment())
const [isFormOpen, setIsFormOpen] = useState(false)
const [updateEvent, setUpdateEvent] = useState(null)
const [nameOfMethod, setNameOfMethod] = useState()
const [theme, setTheme] =useState('App')

// Вибір першого дня на сторінці місяця
const firstDay = today.clone().startOf('month').startOf('week')

// Завантаження даних з localStorage
const [events, setEvents] =useState(JSON.parse(localStorage.getItem('events'))||[])

// Завантаження даних через апі в state events
// useEffect( () => {
//   fetch('http://example/api').then(response => response.json()).then(response => setEvents(response))
// }, [])

const openForm = (method, updateEvent) => {
  setNameOfMethod(method)
  setUpdateEvent(updateEvent || {
    title:'',
    description:'',
    date:moment().format('x')
  })
  setIsFormOpen(true) 
}

const closeForm = () =>{
  setIsFormOpen(false)
  setUpdateEvent(null)
}

// Перелистування місяців
const previosMonth = () => {
  setToday(prev => prev.clone().subtract(1, 'month'))}

const nextMonth = () => {
  setToday(prev => prev.clone().add(1, 'month'))}

//функція обробки Івентів
const saveEvent = (task, i) => {
  let id = i || moment().format('X')
  let temp = events.filter(event => event.id !== id)
  setEvents([...temp,{id, ...task}])
  localStorage.setItem('events', JSON.stringify([...temp,{id, ...task}]));
  closeForm()
}

// Вмдалення Івентів
const deleteEvent = (id) => {
let temp = events.filter(event => event.id !== id)
setEvents([...temp])
localStorage.setItem('events', JSON.stringify([...temp]));
closeForm()
}

// Фільтер дати
const filterMonth = (unixDate) => setToday(moment(unixDate))

// Вибір теми
const selectTheme = (themeName) => setTheme(themeName)
  return (
    <div className={theme} >
      {isFormOpen ?
       <FormEvent deleteEvent={deleteEvent} saveEvent={saveEvent} 
          closeForm={closeForm} updateEvent={updateEvent} 
          setUpdateEvent={setUpdateEvent} nameOfMethod={nameOfMethod}/> 
      : null}
      <Header selectTheme={selectTheme} filterMonth={filterMonth} today = {today} firstDay = {firstDay} openForm={openForm} previosMonth={previosMonth} nextMonth={nextMonth} />
      <Calendar openForm={openForm} events={events} today = {today} firstDay = {firstDay}/>
    </div>
  );
}

export default App;
