import React, {useContext, useEffect, useState} from "react";
import styles from "./index.module.css"
import {createLoginDataStore} from "../loginDataStore";
import UsersStoreContext from "../../../usersStoreContext";
import {LoginingUserStoreProvider} from "../loginDataStoreContext";
import {userSignUp} from "../../../usersStoreActions";
import Login from "../Login";
import Email from "../Email";
import TwoPasswords from "../TwoPasswords";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import {cleanSignUp} from "../loginDataStoreActions";
import ForgotPasswordButton from "./ForgotPasswordButton";

export default function SignUpPage({updatePage}) {
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
                <div className={styles.text}>Регистрация</div>
                <LoginingUserStoreProvider value={loginDataStore}>
                    <Login/>
                    <Email/>
                    <TwoPasswords/>
                </LoginingUserStoreProvider>
                <SignUpButton onClick={(e) => {
                    store.dispatch(userSignUp(loginDataStore.getState()));
                    loginDataStore.dispatch(cleanSignUp());
                }}/>
            </div>
            <SignInButton onClick={(e) => {
                updatePage("sign in");
            }}/>
            <ForgotPasswordButton onClick={(e) => {
                updatePage("forgot data");
            }}/>
        </div>);
}