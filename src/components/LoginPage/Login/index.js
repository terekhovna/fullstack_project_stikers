import React, {useContext} from "react";
import LoginDataStoreContext from "../loginDataStoreContext";
import {editLogin} from "../loginDataStoreActions";
import input_style from "../input_style.module.css";

export default function Login() {
    const store = useContext(LoginDataStoreContext);
    return (
            <textarea placeholder="Логин"
                          className={input_style.style}
                          onChange={(e) => {
                              store.dispatch(editLogin(e.target.value))
                          }}
                          value={store.getState().login || ""}/>
        );
}