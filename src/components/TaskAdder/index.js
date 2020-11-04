import React, { useState, useEffect } from 'react';
import styles from './index.module.css'
import { createStore } from 'redux'
import DescriptionEditor from '../DescriptionEditor'
import ItemsEditor from '../ItemsEditor'

function reducer(state, action) {
  switch(action.type) {
    case 'descriptionEdited': {
      return {
        ...state,
        description: action.description
      }
    }
    case 'itemIsDoneEdited' : {
      let newItems = [...state.items];
      newItems[action.id].isDone = action.isDone;
      return {
        ...state,
        items: newItems
      }
    }
    case 'itemTextEdited' : {
      let newItems = [...state.items];
      newItems[action.id].text = action.text;
      return {
        ...state,
        items: newItems
      }
    }
    case 'addItem' : {
      let newItems = [...state.items];
      newItems.push({text: action.text, isDone: false});
      return {
        ...state,
        items: newItems
      }
    }
    default: {
      return state;
    }
  }
}

export default function TaskAdder({store, initialData}) {
  const [currentTaskStore, _] = useState(createStore(reducer, initialData || {}));
  const [data, setData] = useState(currentTaskStore.getState());

  useEffect(() => {
    currentTaskStore.subscribe(() => {
      setData(currentTaskStore.getState());
    });
  }, []);

  return <div className={styles.style}>
    <DescriptionEditor store={currentTaskStore} data={data}/>
    <ItemsEditor store={currentTaskStore}/>
    {/* 
    <DeadlineEditor/>
    <WorkHoursEditor/>
    <NotesEditor/>
    <AddTaskButton/> */}
  </div>
}