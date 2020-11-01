import React from 'react';
import { createStore } from 'redux'
import styles from './App.module.css';
import Clock from './components/Clock'
import WorkHours from './components/WorkHours/index'
import ItemNumber from './components/ItemNumber/index'
import DeadLineDisplay from './components/DeadLineDisplay/index'
import TaskDisplay from './components/TaskDisplay/index'
import TaskContainer from './components/TaskContainer';

import data from './Data'

const reducer = (state, action) => {
  return state;
}

const store = createStore(reducer, data.slice(0, 17))


function App() {
  return (
    <div>
      <TaskContainer store={store}/>
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
