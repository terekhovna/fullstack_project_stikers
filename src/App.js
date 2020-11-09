import React, {useEffect, useState} from 'react';
import data from './usersData'
import createUsersStore from "./usersStore";
import {UsersStoreProvider} from "./usersStoreContext"
import TasksPage from "./components/TasksPage";
import LoginPage from "./components/LoginPage";

function App() {
    const usersStore = useState(createUsersStore(data))[0];
    const [currentUserId, updateCurrentUserId] = useState(usersStore.getState().currentUserId);

    useEffect(()=>{
        return usersStore.subscribe(()=>{
            updateCurrentUserId(usersStore.getState().currentUserId);
        })
    }, [usersStore]);

    return (
        <UsersStoreProvider value={usersStore}>
            {currentUserId===null?<LoginPage/>:<TasksPage/>}
        </UsersStoreProvider>
    );
}

export default App;
