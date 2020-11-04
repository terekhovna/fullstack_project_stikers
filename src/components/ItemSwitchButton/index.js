import React from 'react';
import styles from './index.module.css'
import {itemIsDoneEdited} from '../Actions'

export default function ItemSwitchButton({id, store}) {

    let item = store.getState().items[id];

    return <input className={styles.style}
        type="checkbox"
        onChange={(e) => {store.dispatch(itemIsDoneEdited(id, e.target.checked))}}
        value={item.isDone || false}
    />;
}