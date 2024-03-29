import React, {useContext, useState} from "react";
import createDataStore from "./dataStore";
import {getCurrentUser} from "../../usersStore";
import {createEditedTaskStore} from "./TaskChangers/editedTaskStore";
import {StoreProvider} from "./dataStoreContext";
import {EditProvider} from "./editContext";
import TabContainer from "./TabContainer";
import TaskContainer from "./TaskContainer";
import TaskEditor from "./TaskChangers/TaskEditor";
import TaskAdder from "./TaskChangers/TaskAdder";
import UsersStoreContext from "../../usersStoreContext";
import UserLogin from "./UserLogin";

export default function TasksPage() {
    const usersStore = useContext(UsersStoreContext);
    const user = getCurrentUser(usersStore.getState());
    const store = useState(createDataStore())[0]; //TODO May be not update
    const editedTaskStore = useState(createEditedTaskStore())[0];
    const [editedTaskId, updateEditedTaskId] = useState(null);
    return (
        <StoreProvider value={store}>
            <UserLogin login={user.login || "loading..."}/>
            <TabContainer/>
            <EditProvider value={{editedTaskId, updateEditedTaskId}}>
                <TaskContainer/>
                {editedTaskId?<TaskEditor/>:
                    <TaskAdder editedTaskStore={editedTaskStore}/>}
            </EditProvider>
        </StoreProvider>
    );
}