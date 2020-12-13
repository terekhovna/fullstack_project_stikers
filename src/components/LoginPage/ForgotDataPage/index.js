import React, {useContext, useEffect, useState} from "react";
import styles from "./index.module.css"
import {createLoginDataStore} from "../loginDataStore";
import UsersStoreContext from "../../../usersStoreContext";
import {LoginingUserStoreProvider} from "../loginDataStoreContext";
import LoginOrEmail from "../LoginOrEmail";
import RestoreDataButton from "./RestoreDataButton";
import {restoreData} from "../../../usersStoreActions";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

export default function ForgotDataPage({updatePage}) {
    const store = useContext(UsersStoreContext);
    const loginDataStore = useState(createLoginDataStore())[0];
    const setLoginData = useState(loginDataStore.getState())[1];

    useEffect(() => {
        return loginDataStore.subscribe(() => {
            setLoginData(loginDataStore.getState());
        });
    }, [setLoginData, loginDataStore]);

    return (
        <div>
            <div className={styles.style}>
                <div className={styles.text}>Восстановление данных</div>
                <div className={styles.login_or_email}>
                    <LoginingUserStoreProvider value={loginDataStore}>
                        <LoginOrEmail/>
                    </LoginingUserStoreProvider>
                </div>
                <RestoreDataButton onClick={(e) => {
                    store.dispatch(restoreData(loginDataStore.getState(), () => updatePage("sign in")));
                }}/>
            </div>
            <SignInButton onClick={(e) => {
                updatePage("sign in");
            }}/>
            <SignUpButton onClick={(e) => {
                updatePage("sign up");
            }}/>
        </div>);
}