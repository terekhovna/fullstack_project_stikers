import React, {useContext} from "react";
import styles from "./index.module.css"
import UsersStoreContext from "../../../usersStoreContext";
import {logout} from "../../../usersStoreActions";
import LogoutButton from "./LogoutButton";

export default function UserLogin({login}) {
    const usersStore = useContext(UsersStoreContext);
    return (
        <div className={styles.style}>
            <div className={styles.text}>
                {`Привет, ${login}`}
            </div>
            <LogoutButton
                onClick={(e) => {usersStore.dispatch(logout(null));}}
            />
        </div>)
}
