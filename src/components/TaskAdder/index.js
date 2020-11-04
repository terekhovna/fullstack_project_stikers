import React, { useState, useEffect } from 'react';
import styles from './index.module.css'
import { createStore } from 'redux'
import DescriptionEditor from '../DescriptionEditor'
import ItemsEditor from '../ItemsEditor'
import DeadlineEditor from "../DeadlineEditor";
import WorkHoursEditor from "../WorkHoursEditor";
import NotesEditor from "../NotesEditor";
import AddTaskButton from "../AddTaskButton";
import {addTask, clean} from "../Actions";

function reducer(state, action) {
  switch(action.type) {
    case 'descriptionEdited': {
      return {
        ...state,
        description: action.description
      }
    }
    case 'itemIsDoneEdited' : {
      let newItems = [...(state.items || [])];
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
      let newItems = [...(state.items || [])];
      newItems.push({text: action.text, isDone: false});
      return {
        ...state,
        items: newItems
      }
    }
    case 'deadlineEdited' : {
      return {
        ...state,
        deadline: action.deadline
      }
    }
    case 'workHoursEdited' : {
      return {
        ...state,
        workHours: action.workHours
      }
    }
    case 'notesEdited' : {
      return {
        ...state,
        notes: action.notes
      }
    }
    case 'clean' : {
      return {}
    }
    default: {
      return state;
    }
  }
}

export default function TaskAdder({store, initialData}) {
  const currentTaskStore = useState(createStore(reducer, initialData || {}))[0];
  const setData = useState(currentTaskStore.getState())[1];

  useEffect(() => {
    currentTaskStore.subscribe(() => {
      setData(currentTaskStore.getState());
    });
  }, [currentTaskStore, setData]);

  return <div className={styles.style}>
    <DescriptionEditor store={currentTaskStore}/>
    <ItemsEditor store={currentTaskStore}/>
    <DeadlineEditor store={currentTaskStore}/>
    <WorkHoursEditor store={currentTaskStore}/>
    <NotesEditor store={currentTaskStore}/>
    <AddTaskButton onClick={(e)=>{store.dispatch(addTask(currentTaskStore.getState()))
    currentTaskStore.dispatch(clean())}}/>
  </div>
}