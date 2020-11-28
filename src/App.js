import React, {useEffect, useState} from 'react';
import createUsersStore from "./usersStore";
import {UsersStoreProvider} from "./usersStoreContext"
import TasksPage from "./components/TasksPage";
import LoginPage from "./components/LoginPage";
import { withCookies } from 'react-cookie';

function App({cookies}) {
    // console.log(cookies.get('user_id'))
    // const usersStore = useState(createUsersStore(parseInt(cookies.get('user_id')) || null))[0];
    const usersStore = useState(createUsersStore())[0];
    const [currentUser, updateCurrentUser] = useState(usersStore.getState());

    console.log(currentUser.id);
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

export default withCookies(App);
