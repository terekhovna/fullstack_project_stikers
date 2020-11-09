import React, {useContext, useEffect, useState} from "react";
import styles from "./index.module.css"
import {createLoginDataStore} from "../loginDataStore";
import UsersStoreContext from "../../../usersStoreContext";
import {LoginingUserStoreProvider} from "../loginDataStoreContext";
import LoginOrEmail from "../LoginOrEmail";
import Password from "../Password";
import SignInButton from "./SignInButton";
import {userSignIn} from "../../../usersStoreActions";
import SignUpButton from "./SignUpButton";
import ForgotPasswordButton from "./ForgotPasswordButton";
import {cleanSignIn} from "../loginDataStoreActions";

export default function SignInPage({updatePage}) {
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
                <div className={styles.text}>Вход</div>
                <LoginingUserStoreProvider value={loginDataStore}>
                    <LoginOrEmail/>
                    <Password/>
                </LoginingUserStoreProvider>
                <SignInButton onClick={(e) => {
                    store.dispatch(userSignIn(loginDataStore.getState()));
                    loginDataStore.dispatch(cleanSignIn());
                }}/>
            </div>
            <SignUpButton onClick={(e) => {
                updatePage("sign up");
            }}/>
            <ForgotPasswordButton onClick={(e) => {
                updatePage("forgot data");
            }}/>
        </div>);
}