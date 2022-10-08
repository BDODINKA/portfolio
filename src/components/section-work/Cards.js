import React from 'react';
import style from './cards.module.css'
import {myProject} from "../../bll/bll";

const Cards = () => {
    return (
        <div className={style.cards}>

            {myProject.map(i=>
                <div className={style.card}>
                    <div className={style.ava_card} style={{
                        background: `url(${i.img})`
                    }}>
                    </div>
                    <a href='#' className={style.a_item}>{i.btn}</a>
                    <div className={style.box_description}>
                        <h4 className={style.title}>{i.title}</h4>
                        <p className={style.description}>{i.description}</p>
                    </div>
                </div>

            )}

            </div>

    );
};

export default Cards;