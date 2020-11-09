import React from 'react';
import styles from './index.module.css'
import {itemTextEdited} from '../../editedTaskActions'
import ItemSwitchButton from '../ItemSwitchButton'

export default function ItemEditor({id, store}) {

    let item = store.getState().items[id];

    return <div className={styles.style}>
        <ItemSwitchButton id={id} store={store}/>

        <textarea placeholder="описание пункта"
        className={styles.textarea}
        onChange={(e) => {store.dispatch(itemTextEdited(id, e.target.value))}}
        value={item.text || ""}/>
    </div>;
}