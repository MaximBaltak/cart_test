import React, {useEffect} from 'react';
import styles from './Price.module.css'
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card/Card";
import {AppDispatch, RootState} from "../../store/store";
import {cardI} from "../../store/types/reducerTypes";
import ActionGetList from "../../store/actions/actionGetList";
const Price = () => {
    const dispatch=useDispatch<AppDispatch>()
    const list=useSelector<RootState,cardI[]>(state => state.cart.lists)
    useEffect(()=>{
        dispatch(ActionGetList())
    },[])
    return (
        <ul className={styles.list}>
            {list.map(el=><Card key={el.id} id={el.id} title={el.title} price={el.price} count={el.count}/>)}
        </ul>
    );
};

export default Price;
