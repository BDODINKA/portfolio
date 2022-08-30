import React from 'react';
import style from './nav.module.css'
import {navigation} from "../../bll/bll";

const Nav = () => {
    return (
            <nav className={style.nav}>
                <ul className={style.u_list}>
                    {navigation.map(n=>
                        <li><a href={n.link} className={style.a_items}>{n.title}</a></li>
                    )}
                </ul>
            </nav>

    );
};

export default Nav;