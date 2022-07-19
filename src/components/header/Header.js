import React from 'react';
import general from "../container.module.css"
import style from "./header.module.css"
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={general.container}>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;