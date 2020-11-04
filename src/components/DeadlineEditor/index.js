import React from "react";
import styles from './index.module.css'
import {deadlineEdited} from '../Actions'
import classNames from 'classnames'

function processDeadline(deadline) {
    deadline = deadline || "";
    deadline = deadline.trim()
    if(deadline.match(/^([0-9]+).([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/, "$3-$2-$1 $4:$5")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/,
            (new Date()).getFullYear().toString() + "-$2-$1 $3:$4")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+)$/,
            (new Date()).getFullYear().toString() + "-$2-$1")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+).([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+).([0-9]+)$/, "$3-$2-$1")
    }
    else {
        return null;
    }
    return new Date(deadline);
}

function isValidDate(deadline) {
    if(deadline===undefined || deadline==="" || deadline===null) {
        return true;
    }
    let date = processDeadline(deadline);
    return !isNaN(date) && date !== null;
}

export default function DeadlineEditor({store}) {
    return (<textarea placeholder="дата дедлайна"
                      className={classNames(styles.style,
                          {[styles.error]: !isValidDate(store.getState().deadline)})}
                      onChange={(e) => {
                          store.dispatch(deadlineEdited(e.target.value))
                      }}
                      value={(store.getState().deadline || "").toString()}/>);
}