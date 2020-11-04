import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget/index'

function format_number_tasks(number_of_tasks, number_of_done_tasks) {
    return String(number_of_done_tasks) + "/" + String(number_of_tasks);
}

export default function ItemNumber({items}) {
    let number_of_tasks=items.length
    let number_of_done_tasks=items.filter(item => item.isDone).length;
    if(number_of_tasks === 0) {
        return <span/>;
    }
    return (
        <Widget style={styles.style}>
            {format_number_tasks(number_of_tasks, number_of_done_tasks)}
        </Widget>
    );
}