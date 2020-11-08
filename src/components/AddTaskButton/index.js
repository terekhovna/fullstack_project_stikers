import React from "react";
import styles  from './index.module.css'

export default function AddTaskButton({onClick}) {
    return (<div
        className={styles.style}
        onClick={onClick}>
        Добавить Задачу
    </div>);
}