import React from 'react';
import styles from './Card.module.css'
import icons from './../../../img/icons.svg'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store";
interface cardProps{
    id:string
    title:string,
    price:number,
    count:number
}
const Card:React.FC<cardProps> = ({id,price,title,count}) => {
    const dispatch=useDispatch<AppDispatch>()
    return (
        <li className={styles.el} >
            <div className={styles.card}>
                <p className={styles.text}>{title}</p>
                <p className={styles.text}>{price} р.</p>
                <div className={styles.buttons}>
                    <button onClick={()=>dispatch({type:'MINUS_COUNT',payload:{id}})}
                            className={styles.icon}>
                        <svg className={styles.minus}>
                            <use xlinkHref={`${icons}#minus`}/>
                        </svg>
                    </button>
                    <p className={styles.text}>{count}</p>
                    <button onClick={()=>dispatch({type:'PLUS_COUNT',payload:{id}})}
                            className={styles.icon}>
                        <svg className={styles.plus}>
                            <use xlinkHref={`${icons}#plus`}/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={[styles.card,styles['card-1']].join(' ')}/>
            <div className={[styles.card,styles['card-2']].join(' ')}/>
        </li>
    );
};

export default Card;
