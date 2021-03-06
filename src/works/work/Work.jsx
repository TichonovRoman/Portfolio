import React from "react";
import style from "./Work.module.scss"


export const Work = (props) => {

    return (
        <div className={style.work}>

            <div className={style.image} style={props.style}>
                <a className={style.viewBtn} href={""}>View</a>
            </div>


            <div className={style.description}>

                <h3 className={style.name}>{props.name}</h3>
                <span className={style.shortDescription}>{props.description}</span>

            </div>

        </div>
    )

}