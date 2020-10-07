import React from 'react'
import styles from './index.module.css'

function format_number_tasks(number_of_tasks, number_of_done_tasks) {
    return String(number_of_done_tasks) + "/" + String(number_of_tasks);
}

export default function ItemNumber({number_of_tasks, number_of_done_tasks}) {
    return (
        <span className={styles.style}>
            {format_number_tasks(number_of_tasks, number_of_done_tasks)}
        </span>
    );
}