import React, {useContext} from 'react';
import styles from './index.module.css'
import classNames from "classnames";
import {changeActiveTab} from '../Actions'
import StoreContext from "../../storeContext"; // TODO rename

export default function Tab({id, title, isActive}) {
    const store = useContext(StoreContext);
    return <div
            className={classNames({
                [styles.disabled]: !isActive,
                [styles.active]: isActive})}
            onClick={(e) => store.dispatch(changeActiveTab(id))}>
        {title || ""}
        </div>;
}