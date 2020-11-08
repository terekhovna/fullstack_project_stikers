import React from "react";
import styles  from './index.module.css'

export default function EndTaskButton({onClick}) {
    return (<div
        className={styles.style}
        onClick={onClick}>
        Завершить задачу
    </div>);
}