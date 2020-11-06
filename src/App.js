import React from 'react';
import { createStore } from 'redux'
import styles from './App.module.css';
import TaskContainer from './components/TaskContainer';
import TaskAdder from './components/TaskAdder';

import data from './Data'
import TabContainer from "./components/TabContainer";

function generateTabId(title) {
    return new Date().getTime();
}

function generateTaskId(task) {
    return new Date().getTime(); //TODO norm id generation
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

// function processActiveTabId(store, id) {
//     id = ParseInt(id)
//     const index = state.tabs.findIndex((tab) => (tab.tabId === state.activeTabId));
// }

function processWorkHours(workHours) {
    return parseFloat(workHours);
}

function processTask(task) {
    task.description = task.description || "";
    task.items = processItems(task.items);
    task.deadline = processDeadline(task.deadline);
    task.id = generateTaskId(task);
    task.workHours = processWorkHours(task.workHours);
    return task;
}

const reducer = (state, action) => {
  switch(action.type) {
      case 'addTask': {
          let task = processTask(action.task);
          if(isNaN(state.activeTabId)) {
              alert("create Tab first");
              return state;
          }
          let tabs = [...state.tabs];
          const index = tabs.findIndex((tab) => (tab.id === state.activeTabId));
          tabs[index] = {
              ...tabs[index],
              tasks: [
                  ...tabs[index].tasks,
                  task
              ]
          }
          return {
              ...state,
              tabs: tabs
          }
      }
      case 'addTab': {
          return {
              ...state,
              tabs: [
                  ...state.tabs,
                  {
                      id: generateTabId(action.title),
                      title: action.title,
                      tasks: []
                  }
              ]
          }
      }
      case 'changeActiveTab' : {
          return {
              ...state,
              activeTabId: action.id
          }
      }
      default: return state;
  }
}

const store = createStore(reducer, data)

function App() {
  return (
    <div className={styles.style}>
      <TabContainer store={store}/>
      <TaskContainer store={store}/>
      <TaskAdder store={store}/>
    </div>
  );
}

export default App;
