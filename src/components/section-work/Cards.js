import React from 'react';
import style from './cards.module.css'

const Cards = () => {
    return (
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.ava_card}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className={style.a_item}>React</a>
                </div>
                <div className={style.box_description}>
                    <h4 className={style.title}>Название Проекта</h4>
                    <p className={style.description}>краткое описание</p>
                </div>
            </div>
            <div className={style.card}>
                <div className= {style.ava_card}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className={style.a_item}>JS</a>
                </div>
                <div className={style.box_description}>
                    <h4 className={style.title}>Название Проекта</h4>
                    <p className={style.description}>краткое описание</p>
                </div>
            </div>
            </div>

    );
};

export default Cards;