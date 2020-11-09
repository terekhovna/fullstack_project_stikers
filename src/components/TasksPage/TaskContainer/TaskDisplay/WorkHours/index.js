import React from 'react'
import styles from './index.module.css'
import Widget from '../Widget'
import {isWorkHours} from "../../../DataParserAndValidator";

function hoursToTime(hours) {
    return String(hours) + " часов"
}

export default function WorkHours({workHours}) {
    if(!isWorkHours(workHours)) {
        return <span/>;
    }
    return (
        <Widget style={styles.style}>
            {hoursToTime(workHours)}
        </Widget>
    );
}
