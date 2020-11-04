import React from "react";
import styles from './index.module.css'
import {workHoursEdited} from '../Actions'

export default function WorkHoursEditor({store}) {
    return (<textarea placeholder="сколько ~ займет задача"
                      className={styles.style}
                      onChange={(e) => {
                          store.dispatch(workHoursEdited(e.target.value))
                      }}
                      value={store.getState().workHours || ""}/>);
}