import React, {useState, useEffect, useContext} from 'react';
import styles from './index.module.css'
import DescriptionEditor from '../DescriptionEditor'
import ItemsEditor from '../ItemsEditor'
import DeadlineEditor from "../DeadlineEditor";
import WorkHoursEditor from "../WorkHoursEditor";
import NotesEditor from "../NotesEditor";
import AddTaskButton from "../AddTaskButton";
import {addTask, clean} from "../Actions";
import StoreContext from "../../storeContext";

export default function TaskAdder({editedTaskStore}) {
  const store = useContext(StoreContext);
  const setData = useState(editedTaskStore.getState())[1];

  useEffect(() => {
    editedTaskStore.subscribe(() => {
      setData(editedTaskStore.getState());
    });
  }, [editedTaskStore, setData]);

  return <div className={styles.style}>
    <DescriptionEditor store={editedTaskStore}/>
    <ItemsEditor store={editedTaskStore}/>
    <DeadlineEditor store={editedTaskStore}/>
    <WorkHoursEditor store={editedTaskStore}/>
    <NotesEditor store={editedTaskStore}/>
    <AddTaskButton onClick={(e)=>{store.dispatch(addTask(editedTaskStore.getState()))
    editedTaskStore.dispatch(clean())}}/>
  </div>
}