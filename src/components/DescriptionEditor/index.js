import React from 'react';
import styles from './index.module.css'
import {descriptionEdited} from '../Actions'
import TextareaAutosize from 'react-textarea-autosize';

export default function DescriptionEditor({store}) {
    return <TextareaAutosize
            minRows={3}
            maxRows={7}
            placeholder="Описание задачи"
            className={styles.style}
            onChange={(e) => {store.dispatch(descriptionEdited(e.target.value))}}
            value={store.getState().description || ""}/>;
}