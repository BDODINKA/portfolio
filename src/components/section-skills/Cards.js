import React from 'react';
import style from './cards.module.css'
import {mySkills} from "../../bll/bll";



const Cards = () => {
    return (

        <div className={style.cards}>
            {mySkills.map((b)=>
                <div className={style.card}>
                <div className={style.box_title_card}>
                <div className={style.ava}>
                    {b.img}
                </div>
                <h4 className={style.title}>{b.title}</h4>
                </div>
                <div className={style.description}>
                    {b.description}
                </div>
                </div>
                )}
        </div>
    );
};

export default Cards;