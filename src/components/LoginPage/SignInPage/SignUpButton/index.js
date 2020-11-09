import React from "react";
import styles  from './index.module.css'

export default function SignUpButton({onClick}) {
    return (<div className={styles.style}
                    onClick={onClick}>
        Зарегистрироваться
    </div>);
}