import React from 'react'
import styles from './index.module.css'

export default function Button({onClick, className, children, textStyle}) {
    return (
        <div className={`${styles.style} ${className || ""}`}
              onClick={onClick}>
            <div className={`${styles.text} ${textStyle || ""}`}>
                {children}
            </div>
        </div>
    );
}