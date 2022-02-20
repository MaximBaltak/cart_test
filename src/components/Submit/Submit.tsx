import React from 'react';
import styles from './Sibmit.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
const Submit = () => {
    const dispatch=useDispatch<AppDispatch>()
    const count=useSelector<RootState,number>(state=> state.cart.count)
    const sum=useSelector<RootState,number>(state=> state.cart.sum)
    return (
        <div className={styles.form}>
            <p className={styles.text}>общая сумма: {sum} р.</p>
            <p className={styles.text}>общие количество: {count} шт. </p>
            <button onClick={()=>dispatch({type:'SUBMIT'})} className={styles.submit}>Оформить заказ</button>
        </div>
    );
};

export default Submit;
