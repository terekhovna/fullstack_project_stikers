import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget/index'
import {isDeadLine, isValidDeadline, parseDeadline} from "../../../DataParserAndValidator";

function processDeadline(deadline) {
    if(isValidDeadline(deadline)) {
        return parseDeadline(deadline);
    }
    else {
        return (deadline || "").trim();
    }
}

function formatDate(deadline) {
    return deadline.toLocaleDateString("ru-RU", { month: 'long', day: 'numeric', hour:'numeric', minute:'numeric'});
}

export default function DeadLineDisplay({deadline}) {
    let date = processDeadline(deadline);
    if(!isDeadLine(date)) {
        return <span/>;
    }
    return (
        <Widget style={styles.style}>
        {formatDate(date)}
        </Widget>
    );
}