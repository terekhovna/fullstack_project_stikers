import React, {useContext, useEffect, useState} from "react";
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
import {updateUserData} from "../../usersStoreActions";

export default function TasksPage() {
    const usersStore = useContext(UsersStoreContext);
    const user = getCurrentUser(usersStore.getState());
    const store = useState(createDataStore(user.data))[0]; //TODO May be not update
    useEffect(() => {
        return store.subscribe(() => {
            usersStore.dispatch(updateUserData(user.id, store.getState()));
        })
    },[store, user.id, usersStore])
    const editedTaskStore = useState(createEditedTaskStore())[0];
    const [editedTaskId, updateEditedTaskId] = useState(null);
    return (
        <StoreProvider value={store}>
            <UserLogin login={user.login}/>
            <TabContainer/>
            <EditProvider value={{editedTaskId, updateEditedTaskId}}>
                <TaskContainer/>
                {editedTaskId?<TaskEditor/>:
                    <TaskAdder editedTaskStore={editedTaskStore}/>}
            </EditProvider>
        </StoreProvider>
    );
}