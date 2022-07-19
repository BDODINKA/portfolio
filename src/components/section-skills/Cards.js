import React from 'react';
import style from './cards.module.css'

const Cards = () => {
    return (
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.box_title_card}>
                    <div className={style.ava}>{}</div>
                    <h4 className={style.title}>React</h4>
                </div>
                <div className={style.description}>
                    Подробное описание Навыка
                </div>
            </div>
            <div className={style.card}>
                <div className= {style.box_title_card}>
                    <div className={style.ava}>{}</div>
                    <h4 className={style.title}>JS</h4>
                </div>
                <div className={style.description}>
                    Подробное описание Навыка
                    Подробное описание Навыка
                    Подробное описание Навыка
                    Подробное описание Навыка
                    Подробное описание Навыка
                    Подробное описание Навыка
                    Подробное описание Навыка
                </div>
            </div>
            <div className={style.card}>
                <div className={style.box_title_card}>
                    <div className={style.ava}>{}</div>
                    <h4 className={style.title}>HTML</h4>
                </div>
                <div className={style.description}>
                    Подробное описание Навыка
                </div>
            </div>
        </div>
    );
};

export default Cards;