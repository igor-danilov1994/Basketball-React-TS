import React from 'react';
import Calendar from 'react-calendar';
import s from './Calendar.module.css';

import 'react-calendar/dist/Calendar.css';


const CalendarComponent = (props: any) => {

    return (
        <div className={`${s.calendar}`}>
            <Calendar
                onClickDay={(date) => props.getBirthday(date)}
            />
        </div>
    )
}

export default CalendarComponent