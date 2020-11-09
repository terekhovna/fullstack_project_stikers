import React, {useState} from 'react';
import styles from './index.module.css'
import {addItem} from '../../editedTaskActions'

export default function AddItem({store}) {
    const [value, changeValue] = useState("");

    return <div className={styles.style}>
    <div className={styles.plus}>+</div>
    
    <textarea 
        placeholder="добавить пункт"
        className={styles.textarea}
        value={value}
        onChange={(e)=>{}}
        onKeyPress={(e) => {
            if(e.key === 'Enter') {
                store.dispatch(addItem(e.target.value));
                changeValue("");
            }
            else {
            changeValue(e.value)
            }
        }}
    />
</div>;
}