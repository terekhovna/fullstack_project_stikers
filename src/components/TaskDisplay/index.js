import React from 'react'
import DeadLineDisplay from '../widgets/DeadLineDisplay'
import ItemNumber from '../widgets/ItemNumber'
import WorkHours from '../widgets/WorkHours'
import styles from './index.module.css'

export default function TaskDisplay({data})
{
    const {description, 
        items,
        deadline,
        workHours
    } = data;
    return (
        <span className={styles.style}>
            <div className={styles.around_text}>
                <div className={styles.text}>{description}</div>
            </div>
            <div className={styles.child_style}>
                <DeadLineDisplay deadline={deadline}/>
                <ItemNumber number_of_tasks={items.length}
                    number_of_done_tasks={items.filter(item => item.isDone).length}/>
                <WorkHours value={workHours}/> 
            </div>
        </span>
    );
}