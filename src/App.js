import React, {useState} from 'react';
import styles from './App.module.css';
import TaskContainer from './components/TaskContainer';
import TaskAdder from './components/TaskAdder';

import TabContainer from "./components/TabContainer";
import {EditProvider} from "./editContext";
import {createEditedTaskStore} from "./editedTaskStore";
import {StoreProvider} from "./storeContext";

import data from './Data'
import createMainStore from "./mainStore";
import TaskEditor from "./components/TaskEditor";

function App() {
    const editedTaskStore = useState(createEditedTaskStore())[0];
    const store = useState(createMainStore(data))[0];
    const [editedTaskId, updateEditedTaskId] = useState(null);
    return (
        <div className={styles.style}>
            <StoreProvider value={store}>
            <EditProvider value={{editedTaskId, updateEditedTaskId}}>
                <TabContainer/>
                <TaskContainer/>
                {editedTaskId?<TaskEditor/>:
                    <TaskAdder editedTaskStore={editedTaskStore}/>}
            </EditProvider>
            </StoreProvider>
        </div>
    );
}

export default App;
