import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget/index'
import {isDeadLine} from "../../DataParserAndValidator";

function formatDate(deadline) {
    return deadline.toLocaleDateString("ru-RU", { month: 'long', day: 'numeric', hour:'numeric', minute:'numeric'});
}

export default function DeadLineDisplay({deadline}) {
    if(!isDeadLine(deadline)) {
        return <span/>;
    }
    return (
        <Widget style={styles.style}>
        {formatDate(deadline)}
        </Widget>
    );
}