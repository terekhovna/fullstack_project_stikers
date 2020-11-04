import React, { useState, useEffect } from 'react';
import styles from './index.module.css'
import TaskLineContainer from '../TaskLineContainer/index'

export default function TaskContainer({store}) {
  const [data, setData] = useState(store.getState());
  useEffect(() => {
    console.log(store.getState());
    store.subscribe(() => {
      setData(store.getState());
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