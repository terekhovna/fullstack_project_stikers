import React from 'react';
import { createStore } from 'redux'
import styles from './App.module.css';
import TaskContainer from './components/TaskContainer';
import TaskAdder from './components/TaskAdder';

import data from './Data'

function generateId(task) {
    return 12;
}

function processDeadline(deadline) {
    deadline = deadline || "";
    deadline = deadline.trim()
    if(deadline.match(/^([0-9]+).([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/, "$3-$2-$1 $4:$5")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/,
            (new Date()).getFullYear().toString() + "-$2-$1 $3:$4")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+)$/,
            (new Date()).getFullYear().toString() + "-$2-$1")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+).([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+).([0-9]+)$/, "$3-$2-$1")
    }
    else {
        return null;
    }
    return new Date(deadline);
}

function processItems(items) {
    items = items || [];
    return items.map((item) => {return {
        text: item.text.trim(),
        isDone: item.isDone
    }}).filter((item) => item.text.length);
}

function processWorkHours(workHours) {
    return parseFloat(workHours);
}

function processTask(task) {
    task.description = task.description || "";
    task.items = processItems(task.items);
    task.deadline = processDeadline(task.deadline);
    task.id = generateId(task);
    task.workHours = processWorkHours(task.workHours);
    return task;
}

const reducer = (state, action) => {
  switch(action.type) {
      case 'addTask': {
          let task = processTask(action.task);
          console.log(task)
          return [
              ...state,
              task
          ]
      }
      default: return state;
  }
}

const store = createStore(reducer, data.slice(0, 17))

function App() {
  return (
    <div className={styles.style}>
      <TaskContainer store={store}/>
      <TaskAdder store={store}/>
    </div>
  );
}

export default App;
