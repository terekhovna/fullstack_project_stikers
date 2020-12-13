import React from "react";
import styles  from './index.module.css'
import Button from '../../../Button'

export default function SignInButton({onClick}) {
    return (<Button className={styles.style}
        onClick={onClick}
        textStyle={styles.text}>
        Войти
    </Button>);
}