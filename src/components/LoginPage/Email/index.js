import React, {useContext} from "react";
import input_style from '../input_style.module.css'
import classNames from 'classnames'
import styles from './index.module.css'
import LoginDataStoreContext from "../loginDataStoreContext";
import {editEmail} from "../loginDataStoreActions";
import {isValidEmail} from "../DataValidator";

export default function Email() {
    const store = useContext(LoginDataStoreContext);
    return (
        <div className={styles.style}>
        <textarea placeholder="Электронная почта"
                  className={classNames(input_style.style,
                      {[input_style.error]: !isValidEmail(store.getState().email)
                          && ((store.getState().email || "").trim() !== "")})}
                  onChange={(e) => {
                      store.dispatch(editEmail(e.target.value))
                  }}
                  value={store.getState().email || ""}/>
        </div>);
}