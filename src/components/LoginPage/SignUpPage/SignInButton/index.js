import React from "react";
import styles  from './index.module.css'

export default function SignInButton({onClick}) {
    return (<div className={styles.style}
                    onClick={onClick}>
        Войти
    </div>);
}