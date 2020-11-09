import React, {useContext} from "react";
import styles from './index.module.css'
import input_style from '../input_style.module.css'
import classNames from 'classnames'
import LoginDataStoreContext from "../loginDataStoreContext";
import {editEmailInPair, editLoginInPair} from "../loginDataStoreActions";
import {isValidEmail} from "../DataValidator";

export default function LoginOrEmail() {
    const store = useContext(LoginDataStoreContext);
    return (
        <div className={styles.style}>
        <textarea placeholder="Логин"
                      className={input_style.style}
                      onChange={(e) => {
                          store.dispatch(editLoginInPair(e.target.value))
                      }}
                      value={store.getState().loginInPair || ""}/>
        <div className={styles.text}>или</div>
        <textarea placeholder="Электронная почта"
                  className={classNames(input_style.style,
                      {[input_style.error]: !isValidEmail(store.getState().emailInPair)
                          && ((store.getState().emailInPair || "").trim() !== "")})}
                  onChange={(e) => {
                      store.dispatch(editEmailInPair(e.target.value))
                  }}
                  value={store.getState().emailInPair || ""}/>
        </div>);
}