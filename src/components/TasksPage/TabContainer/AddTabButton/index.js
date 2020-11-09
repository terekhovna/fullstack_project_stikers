import React, {useState} from "react";
import styles  from './index.module.css'
import {addTab} from "../../dataStoreActions";
import plus from '../../../../images/list-add.svg'

export default function AddTabButton({store}) {

    const [isClicked, updateIsClicked] = useState(false);
    const [value, updateValue] = useState("");

    let content;
    if(isClicked) {
        content = <textarea
            placeholder="название"
            className={styles.textarea}
            value={value}
            onChange={e => {}}
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
        content = <img src={plus} className={styles.button} alt={"add tab"}
                       onClick={(e) => {updateIsClicked(true);}}/>
    }
    return <div>
        {content}
    </div>
}