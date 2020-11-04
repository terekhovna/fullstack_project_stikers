import React from 'react'
import styles from './index.module.css'

export default function Widget({children, style}) {
    return (
        <span className={`${styles.style} ${style || ""}`}>
            <div className={styles.text}>
                {children}
            </div>
        </span>
    );
}