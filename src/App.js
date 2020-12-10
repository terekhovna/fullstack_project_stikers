import React, {useEffect, useState} from 'react';
import createUsersStore from "./usersStore";
import {UsersStoreProvider} from "./usersStoreContext"
import TasksPage from "./components/TasksPage";
import LoginPage from "./components/LoginPage";

function App({cookies}) {
    const usersStore = useState(createUsersStore())[0];
    const [currentUser, updateCurrentUser] = useState(usersStore.getState());

    //console.log(currentUser.id);
    useEffect(()=>{
        return usersStore.subscribe(()=>{
            updateCurrentUser(usersStore.getState());
        })
    }, [usersStore]);
    return (
        <UsersStoreProvider value={usersStore}>
            {!currentUser.id?<LoginPage/>:<TasksPage/>}
        </UsersStoreProvider>
    );
}

export default App;
