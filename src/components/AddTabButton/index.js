import React, {useState} from "react";
import styles  from './index.module.css'
import {addTab} from "../Actions";

export default function AddTabButton({store}) {

    const [isClicked, updateIsClicked] = useState(false);
    const [value, updateValue] = useState("");

    let content;
    if(isClicked) {
        content = <textarea
            placeholder="название"
            className={styles.textarea} //TODO process empty title
            value={value}
            onKeyUp={(e) => {
                if(e.key === "Enter") {
                    store.dispatch(addTab(e.target.value));
                    updateValue("");
                    updateIsClicked(false);
                }
                else if(e.key === "Escape") {
                    updateValue("");
                    updateIsClicked(false);
                }
                else {
                    updateValue(e.value)
                }
            }}
        />
    }
    else {
        content = <div className={styles.button}
                       onClick={(e) => {updateIsClicked(true);}}>
            +
        </div>
    }
    return <div>
        {content}
    </div>
}