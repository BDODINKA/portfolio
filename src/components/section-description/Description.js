import React from 'react';
import general from "../container.module.css"
import style from "./description.module.css"

const Description = () => {
    return (
        <section className={style.section}>
            <div className={general.container}>
                <div className={style.content}>
                    <div className={style.box_Title}>
                        <h2 className={style.title}>Привет!<br/>Меня зовут Дмитрий.<br/>Я front-end разработчик</h2>
                    </div>
                    <div className={style.ava}></div>
                </div>
            </div>
        </section>
    );
};

export default Description;