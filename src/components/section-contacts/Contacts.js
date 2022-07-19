import React from 'react';
import style from "./contacts.module.css";
import general from "../container.module.css";


const Contacts = () => {
    return (
        <section className={style.section}>
            <div className={general.container}>
                <div className={style.content}>
                    <h3 className={style.title}>Контакты</h3>
                    <form action="#" className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button className={style.btn}>Отправить</button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;