import React, { useState, useEffect } from 'react';
import styles from './index.module.css'
import TaskLineContainer from '../TaskLineContainer/index'

function getTasks(store) {
  const activeTabId = store.getState().activeTabId;
  const index = store.getState().tabs.findIndex((tab) => (tab.id === activeTabId));
  return store.getState().tabs[index].tasks;
}

export default function TaskContainer({store}) {
  const [data, setData] = useState(getTasks(store));
  useEffect(() => {
    store.subscribe(() => {
      setData(getTasks(store));
    });
  }, [store]);
  let containers = [];
  const task_in_row = 4;
  for(let i = 0; i < data.length; i += task_in_row) {
    containers.push(
      <TaskLineContainer data={data.slice(i, i+task_in_row)}/>
    );
  }
  return <div className={styles.style}>
    {containers}
  </div>
}