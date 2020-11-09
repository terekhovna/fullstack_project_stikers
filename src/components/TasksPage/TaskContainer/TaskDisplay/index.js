import React, {useState, useContext} from 'react'
import DeadLineDisplay from './DeadLineDisplay'
import ItemNumber from './ItemNumber'
import WorkHours from './WorkHours'
import styles from './index.module.css'
import cross from '../../../../images/Red_X.svg'
import pencil from '../../../../images/barretr_Pencil.svg'
import {deleteTask} from '../../dataStoreActions'
import DataStoreContext from "../../dataStoreContext";
import EditContext from "../../editContext";

export default function TaskDisplay({data})
{
    const {editedTaskId, updateEditedTaskId} = useContext(EditContext);
    const store = useContext(DataStoreContext);
    const [inFocus, changeInFocus] = useState(false);
    const {
        id,
        description,
        items,
        deadline,
        workHours
    } = data;
    return (
        <div className={styles.style}
             onMouseEnter={(e)=>{changeInFocus(true)}}
            onMouseLeave={(e)=>{changeInFocus(false)}}>
            <div className={styles.around_text}>
                <div className={styles.text}>{description}</div>
            </div>
            {inFocus?<div className={styles.tools}>
                <img src={pencil} className={pencil} width={"40%"} alt={"edit"}
                     onClick={(e) => {
                         updateEditedTaskId(id)}}/>
                <img src={cross} className={cross} width={"40%"} alt={"delete"}
                    onClick={(e) => {
                        store.dispatch(deleteTask(id));
                        if (editedTaskId === id) {
                            updateEditedTaskId(null);
                        }
                    }}/>
            </div>:""}
            <div className={styles.child_style}>
                <DeadLineDisplay deadline={deadline}/>
                <ItemNumber items={items}/>
                <WorkHours workHours={workHours}/>
            </div>
        </div>
    );
}