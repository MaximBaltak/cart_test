import React from 'react';
import styles from './AddForm.module.css'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
const AddFrom = () => {
    const dispatch=useDispatch<AppDispatch>()

    const add=(e:React.FormEvent<HTMLFormElement>)=>{
        const arr=Array.from<Element>(e.currentTarget.children)
        dispatch({
            type:'ADD',
            payload:{
                title:(arr[0]as HTMLInputElement).value,
                price:+(arr[1]as HTMLInputElement).value
            }
        })
        e.preventDefault()
    }
    return (
        <form onSubmit={add} className={styles.form}>
            <input className={styles.input} type="text" name='title' placeholder='Название'/>
            <input className={styles.input} type="text" name='price' placeholder='Цена'/>
            <button type='submit' className={styles.add}>Добавить</button>
        </form>
    );
};

export default AddFrom;
