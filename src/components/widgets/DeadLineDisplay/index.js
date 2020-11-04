import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget/index'

function format_date(deadline) {
    return deadline.toLocaleDateString("ru-RU", { month: 'long', day: 'numeric', hour:'numeric', minute:'numeric'});
}

export default function DeadLineDisplay({deadline}) {
    return (
        <Widget style={styles.style}>
        {format_date(deadline)}
        </Widget>
    );
}