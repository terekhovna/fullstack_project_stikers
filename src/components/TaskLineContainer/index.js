import React from 'react';
import TaskDisplay from '../TaskDisplay/index';
import styles from './index.module.css'

export default function TaskLineContainer({data}) {
    let Tasks = data.map((datum) => 
      <TaskDisplay key={datum.id} data={datum}/>
    )
    return <span className={styles.style}>
      {Tasks}
    </span>;
}