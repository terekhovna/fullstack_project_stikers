import React from 'react';
import styles from './index.module.css'
import {itemEdited, addItem} from '../Actions'
import ItemEditor from '../ItemEditor'
import AddItem from '../AddItem'

export default function ItemsEditor({store}) {

    let items = store.getState().items || [];
    let itemEditors = [];
    for(let i = 0; i < items.length; ++i) {
        itemEditors.push(<ItemEditor 
            id={i}
            store={store}
        />);
    }

    return <div className={styles.style}>
        {itemEditors}
        <AddItem store={store}/>
    </div>;
}