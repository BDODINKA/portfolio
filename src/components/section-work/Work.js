import React from 'react';
import general from '../container.module.css'
import style from './work.module.css'
import Cards from "../section-work/Cards";

const Work = () => {
    return (
        <section className={style.section} id="Work">
            <div className={general.container}>
                <div className={style.content}>
                        <h3 className={style.title}>Мои Работы</h3>
                    <Cards/>
                </div>
            </div>
        </section>
    );
};

export default Work;