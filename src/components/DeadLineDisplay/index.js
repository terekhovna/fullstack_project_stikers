import React from 'react'
import styles from './index.module.css'

function format_date(deadline) {
    return deadline.toLocaleDateString("ru-RU", { month: 'long', day: 'numeric', hour:'numeric', minute:'numeric'});
}

export default function DeadLineDisplay({deadline}) {
    return (
        <span className={styles.style}>
        {format_date(deadline)}
        </span>
    );
}