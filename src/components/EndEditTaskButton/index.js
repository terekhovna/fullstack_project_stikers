import React from "react";
import styles  from './index.module.css'

export default function EndEditTaskButton({onClick}) {
    return (<div
        className={styles.style}
        onClick={onClick}>
        Готово
    </div>);
}