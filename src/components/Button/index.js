import React from 'react'
import styles from './index.module.css'

export default function Button({onClick, className, children, textStyle}) {
    return (
        <div className={`${styles.style} ${className || ""}`}
              onClick={onClick}
              onKeyUp={(e) => {if(e.key === "Enter") onClick(e)}}
              tabIndex="0">
            <div className={`${styles.text} ${textStyle || ""}`}>
                {children}
            </div>
        </div>
    );
}