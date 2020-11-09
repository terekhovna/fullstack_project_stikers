import React from "react";
import styles  from './index.module.css'
import Button from "../../../Button";

export default function ForgotPasswordButton({onClick}) {
    return (<Button className={styles.style}
                    onClick={onClick}
                    textStyle={styles.text}>
        Забыли данные
    </Button>);
}