import React from 'react';
import general from "../container.module.css";
import style from "./footer.module.css";
import {Social} from "../../bll/bll";

const Footer = () => {
    return (
        <footer className={style.footer} id="Contacts">
            <div className={general.container}>
                <h3 className={style.title}>Дмитрий Милевский</h3>
                <div className={style.nav}>
                    <ul className={style.items}>
                        {Social.map((i)=>
                            <li className={style.item}><a href={i.link} className={style.link}>{i.logo}</a></li>
                        )}
                    </ul>
                </div>
                <span className={style.copyright}>&copy; 2022 Все права защищены</span>
            </div>
        </footer>
    );
};

export default Footer;