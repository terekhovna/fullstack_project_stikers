import React from 'react'
import styles from './index.module.css'

function hours_to_time(hours) {
    hours = parseFloat(hours)
    hours || (hours = "")
    return String(hours) + " часов"
}

export default function WorkHours({value}) {
    return (
        <span className={styles.work_hours}>
            {hours_to_time(value)}
        </span>
    );
}
