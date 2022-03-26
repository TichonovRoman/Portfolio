import React from "react";
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <button className={style.button}>View</button>

            </div>

            <div className={style.description}>
                <h3>{props.name}</h3>
                <span className={style.shortDescription}>{props.description}</span>

            </div>

        </div>
    )

}