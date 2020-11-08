import React from "react";
import styles from './index.module.css'
import {deadlineEdited} from '../Actions'
import classNames from 'classnames'
import {isValidDeadline} from "../DataParserAndValidator";

export default function DeadlineEditor({store}) {
    return (<textarea placeholder="дата дедлайна"
                      className={classNames(styles.style,
                          {[styles.error]: !isValidDeadline(store.getState().deadline)
                              && ((store.getState().deadline || "").trim() !== "")})}
                      onChange={(e) => {
                          store.dispatch(deadlineEdited(e.target.value))
                      }}
                      value={(store.getState().deadline || "").toString()}/>);
}