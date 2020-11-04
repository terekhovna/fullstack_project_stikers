import React from 'react';
import styles from './index.module.css'
import {descriptionEdited} from '../Actions'

export default function DescriptionEditor({store, data}) {
    return (<textarea placeholder="Описание задачи"
        className={styles.style}
        onChange={(e) => {store.dispatch(descriptionEdited(e.target.value))}}
        value={data.description || ""}/>);
}