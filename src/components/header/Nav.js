import React from 'react';
import style from './nav.module.css'

const Nav = () => {
    return (
            <nav className={style.nav}>
                <ul className={style.u_list}>
                    <li><a href="#" className={style.a_items}>Главная</a></li>
                    <li><a href="#" className={style.a_items}>Скиллы</a></li>
                    <li><a href="#" className={style.a_items}>Работы</a></li>
                    <li><a href="#" className={style.a_items}>Контакты</a></li>
                </ul>
            </nav>

    );
};

export default Nav;