import React from 'react';
import styles from './index.module.css'
import ItemEditor from '../ItemEditor'
import AddItem from '../AddItem'

export default function ItemsEditor({store}) {

    let items = store.getState().items || [];
    let itemEditors = [];
    for(let i = 0; i < items.length; ++i) {
        itemEditors.push(<ItemEditor 
            key={i}
            id={i}
            store={store}
        />);
    }

    return <div className={styles.style}>
        <div className={styles.item_list}>
            {itemEditors}
        </div>
        <AddItem store={store}/>
    </div>;
}