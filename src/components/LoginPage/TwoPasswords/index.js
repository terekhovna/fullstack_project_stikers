import React, {useContext} from "react";
import styles from './index.module.css'
import classNames from 'classnames'
import LoginDataStoreContext from "../loginDataStoreContext";
import {editPassword1, editPassword2} from "../loginDataStoreActions";
import input_style from "../input_style.module.css";

export default function TwoPasswords() {
    const store = useContext(LoginDataStoreContext);
    return (
        <div className={styles.style}>
        <textarea placeholder="пароль"
                  className={input_style.style}
                  onChange={(e) => {
                      store.dispatch(editPassword1(e.target.value))
                  }}
                  value={store.getState().password1 || ""}/>
        <textarea placeholder="повторите пароль"
                  className={classNames(input_style.style,
                      {[input_style.error]: (store.getState().password1 !== store.getState().password2)
                          && ((store.getState().password2 || "").trim() !== "")})}
                  onChange={(e) => {
                      store.dispatch(editPassword2(e.target.value))
                  }}
                  value={store.getState().password2 || ""}/>
        </div>);
}