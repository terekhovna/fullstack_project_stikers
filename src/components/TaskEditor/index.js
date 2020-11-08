import React, {useState, useEffect, useContext} from 'react';
import styles from './index.module.css'
import DescriptionEditor from '../DescriptionEditor'
import ItemsEditor from '../ItemsEditor'
import DeadlineEditor from "../DeadlineEditor";
import WorkHoursEditor from "../WorkHoursEditor";
import NotesEditor from "../NotesEditor";
import {deleteTask, taskEdited} from "../Actions";
import StoreContext from "../../storeContext";
import {createEditedTaskStore} from "../../editedTaskStore";
import {findTask} from "../../mainStore";
import EditContext from "../../editContext";
import EndEditTaskButton from "../EndEditTaskButton";
import CancelEditTaskButton from "../CancelEditTaskButton";
import EndTaskButton from "../EndTaskButton";

export default function TaskEditor() {
  const {editedTaskId, updateEditedTaskId} = useContext(EditContext);
  const store = useContext(StoreContext);

  const [editedTaskStore, updateEditedTaskStore] = useState(createEditedTaskStore());
  useEffect(() => {
    updateEditedTaskStore(createEditedTaskStore(findTask(store, editedTaskId)));
  }, [store, editedTaskId])
  const setData = useState(editedTaskStore.getState())[1];
  useEffect(() => {
    editedTaskStore.subscribe(() => {
      setData(editedTaskStore.getState());
    });
  }, [editedTaskStore, setData]);

  return <div className={styles.style}>
    <div className={styles.title}>Редактирование задачи</div>
    <DescriptionEditor store={editedTaskStore}/>
    <ItemsEditor store={editedTaskStore}/>
    <DeadlineEditor store={editedTaskStore}/>
    <WorkHoursEditor store={editedTaskStore}/>
    <NotesEditor store={editedTaskStore}/>
    <EndEditTaskButton onClick={(e)=>{
      store.dispatch(taskEdited(editedTaskId, editedTaskStore.getState()));
      updateEditedTaskId(null);
    }}/>
    <div className={styles.lower_buttons}>
      <CancelEditTaskButton onClick={(e)=>{
        updateEditedTaskId(null);
      }}/>
      <EndTaskButton onClick={(e)=>{
        store.dispatch(deleteTask(editedTaskId));
        updateEditedTaskId(null);
      }}/>
    </div>
  </div>
}