import React from 'react';
import { createStore } from 'redux'
import styles from './App.module.css';
import Clock from './components/Clock'
import WorkHours from './components/widgets/WorkHours/index'
import ItemNumber from './components/widgets/ItemNumber/index'
import DeadLineDisplay from './components/widgets/DeadLineDisplay/index'
import TaskDisplay from './components/TaskDisplay/index'
import TaskContainer from './components/TaskContainer';
import TaskAdder from './components/TaskAdder';

import data from './Data'

const reducer = (state, action) => {
  return state;
}

const store = createStore(reducer, data.slice(0, 29))


function App() {
  return (
    <div className={styles.style}>
      <TaskContainer store={store}/>
      <TaskAdder store={store} initialData={{"items": [
      {
        "text": "1 лекция",
        "isDone": true
      },
      {
        "text": "2 лекция",
        "isDone": false
      }
    ]}}/>
    </div>
    // <div className={styles.page}>
    //   <Clock />
    //   <div>
    //     <WorkHours value={5.5}/>{" "}<ItemNumber number_of_tasks={77} number_of_done_tasks={100}/>
    //     {" "} <DeadLineDisplay deadline={new Date()} />
    //   </div>
    //   <div>
    //     <TaskDisplay data={data[0]}/>
    //     <TaskDisplay data={data[1]}/>
    //   </div>
    // </div>
  );
}

export default App;
