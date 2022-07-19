import React from 'react';
import general from '../container.module.css'
import style from './offer.module.css'

const Offer = () => {
    return (
        <section className={style.section}>
            <div className={general.container}>
                <div className={style.content}>
                        <h3 className={style.title}>Рассматриваю варианты удаленной работы</h3>
                        <button className={style.btn}>Нанять меня</button>
                </div>
            </div>
        </section>
    );
};

export default Offer;