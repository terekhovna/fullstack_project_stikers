import React from "react";
import styles from './index.module.css'
import {workHoursEdited} from '../Actions'
import classNames from "classnames";
import {isValidWorkHours} from "../DataParserAndValidator";

export default function WorkHoursEditor({store}) {
    return (<textarea placeholder="сколько ~ займет задача"
                      className={classNames(styles.style,
                          {[styles.error]: !isValidWorkHours(store.getState().workHours)
                              && ((store.getState().workHours || "").trim() !== "")})}
                      onChange={(e) => {
                          store.dispatch(workHoursEdited(e.target.value))
                      }}
                      value={store.getState().workHours || ""}/>);
}