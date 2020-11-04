import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget'

function hours_to_time(hours) {
    hours = parseFloat(hours)
    hours || (hours = "")
    return String(hours) + " часов"
}

export default function WorkHours({value}) {
    return (
        <Widget style={styles.style}>
            {hours_to_time(value)}
        </Widget>
    );
}
