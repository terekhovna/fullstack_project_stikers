import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget'

function hoursToTime(hours) {
    hours = parseFloat(hours)
    hours || (hours = "")
    return String(hours) + " часов"
}

export default function WorkHours({workHours}) {
    if(isNaN(workHours)) {
        return <span/>;
    }
    return (
        <Widget style={styles.style}>
            {hoursToTime(workHours)}
        </Widget>
    );
}
