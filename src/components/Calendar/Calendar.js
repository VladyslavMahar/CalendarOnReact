import React from "react";
import CalendarItem from "../CalendarItem/CalendarItem";
import "./index.css";

const Calendar = ({ firstDay, today, events, openForm, filterMonth }) => {
  const day = firstDay.clone().subtract(1, "day");
  const arrCalendar = [...Array(42)].map(() => day.add(1, "day").clone());

  return (
    <div className="calendar">
      {arrCalendar.map((Item) => (
        <CalendarItem
          filterMonth={filterMonth}
          openForm={openForm}
          key={Item.format("DD-MM-YYYY")}
          Item={Item}
          today={today}
          events={events}
        />
      ))}
    </div>
  );
};

export default Calendar;
