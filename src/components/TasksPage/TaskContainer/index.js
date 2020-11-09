import React, {useState, useEffect, useContext} from 'react';
import styles from './index.module.css'
import TaskLineContainer from './TaskLineContainer'
import DataStoreContext from "../dataStoreContext";

function getTasks(store) {
  const activeTabId = store.getState().activeTabId;
  const index = store.getState().tabs.findIndex((tab) => (tab.id === activeTabId));
  return index === -1?[]:store.getState().tabs[index].tasks;
}

function generateKey(array) {
  return array.map((data)=>data.id).toString();
}

export default function TaskContainer() {
  const store = useContext(DataStoreContext);
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
      <TaskLineContainer key={generateKey(data.slice(i, i+task_in_row))} data={data.slice(i, i+task_in_row)}/>
    );
  }
  return <div className={styles.style}>
    {containers}
  </div>
}