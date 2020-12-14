import React, {useContext} from "react";
import styles from "./index.module.css"
import LoginDataStoreContext from "../loginDataStoreContext";
import {editPassword} from "../loginDataStoreActions";
import input_style from "../input_style.module.css";

export default function Password() {
    const store = useContext(LoginDataStoreContext);
    return (
        <div className={styles.style}>
            <textarea placeholder="пароль"
                          className={`${styles.text} ${input_style.style}`}
                          onChange={(e) => {
                              store.dispatch(editPassword(e.target.value))
                          }}
                          value={store.getState().password || ""}/>
        </div>
        );
}