import React from 'react';
import styles from './index.module.css'
import classNames from "classnames";
import {changeActiveTab} from '../Actions' // TODO rename

export default function Tab({store, id, title, isActive}) {
    return <div
            className={classNames({
                [styles.disabled]: !isActive,
                [styles.active]: isActive})}
            onClick={(e) => store.dispatch(changeActiveTab(id))}>
        {title || ""}
        </div>;
}