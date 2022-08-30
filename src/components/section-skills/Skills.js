import React from 'react';
import general from '../container.module.css'
import style from  './skills.module.css'
import Cards from "./Cards";

const Skills = () => {
    return (
        <section className={style.section} id="Skills">
            <div className={general.container}>
                <div className={style.content}>
                    <h3 className={style.title}>Мои Скиллы</h3>
                    <Cards/>
                </div>
            </div>
        </section>
    );
};

export default Skills;