import React from 'react'
import DeadLineDisplay from '../DeadLineDisplay'
import ItemNumber from '../ItemNumber'
import WorkHours from '../WorkHours'
import styles from './index.module.css'

export default function TaskDisplay({data})
{
    const {description, 
        items,
        deadline,
        hours_to_do
    } = data;
    return (
        <span className={styles.style}>
            <p className={styles.text}>{description}</p>
            <div className={styles.child_style}>
                <DeadLineDisplay deadline={deadline}/>
                <ItemNumber number_of_tasks={items.length}
                    number_of_done_tasks={items.filter(item => item.is_done).length}/>
                <WorkHours value={hours_to_do}/> 
            </div>
        </span>
    );
}