import React from 'react';
import general from "../container.module.css";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={general.container}>
                <h3 className={style.title}>Дмитрий Милевский</h3>
                <div className={style.nav}>
                    <ul className={style.items}>
                        <li className={style.item}>1</li>
                        <li className={style.item}>2</li>
                        <li className={style.item}>3</li>
                        <li className={style.item}>4</li>
                    </ul>
                </div>
                <span className={style.copiring}>&copy; 2022 Все права защищены</span>
            </div>
        </footer>
    );
};

export default Footer;