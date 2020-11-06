import React, {useState, useEffect} from 'react';
import styles from './index.module.css'
import Tab from "../Tab";
import AddTabButton from "../AddTabButton";

function getActiveTab(store) {
    return store.getState().activeTabId || NaN;
}

function getTabList(store) {
    return store.getState().tabs || [];
}

export default function TabContainer({store}) {
    const [activeTabId, updateActiveTabId] = useState(getActiveTab(store));
    const [tabList, updateTabList] = useState(getTabList(store));
    useEffect(() => {
        store.subscribe(() => {
            updateActiveTabId(getActiveTab(store));
            updateTabList(getTabList(store));
        });
    }, [store]);
    return <div className={styles.style}>
        <div className={styles.tablist}>
            {tabList.map((tab) => <Tab store={store}
                                       id={tab.id}
                                       title={tab.title || ""}
                                       isActive={tab.id === activeTabId}/>)
            }
        </div>
        <AddTabButton store={store}/>
    </div>
}