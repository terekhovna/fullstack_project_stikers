import React from "react";
import styles  from './index.module.css'

export default function CancelEditTaskButton({onClick}) {
    return (<div
        className={styles.style}
        onClick={onClick}>
        Отмена
    </div>);
}