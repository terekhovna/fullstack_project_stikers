import React from 'react';
import styles from './index.module.css'
import {notesEdited} from '../Actions'
import TextareaAutosize from 'react-textarea-autosize';

export default function NotesEditor({store}) {
    return <TextareaAutosize
            minRows={4}
            placeholder="Прочие заметки к задаче ....."
            className={styles.style}
            onChange={(e) => {
                store.dispatch(notesEdited(e.target.value))
            }}
            value={store.getState().notes || ""}
        />;
}