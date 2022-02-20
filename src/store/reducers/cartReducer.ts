import {actionTypeCart, stateCartI} from "../types/reducerTypes";

const defaultState:stateCartI={
    lists:[],
    sum:0,
    count:0
}
const cartReducer=(state:stateCartI=defaultState,action:actionTypeCart):stateCartI=>{
    const stateCopy:stateCartI={...state,lists:[...state.lists]}
    switch (action.type){
        case "GET":
            stateCopy.lists=[...action.payload]
            stateCopy.lists.forEach(el=>{
                stateCopy.sum +=el.price*el.count
                stateCopy.count +=el.count
            })
            return stateCopy
        case 'ADD':
            if(action.payload.title&&/^\d+$/.test(String(action.payload.price))){
                stateCopy.lists.unshift({
                    id: Math.floor(Math.random()*1000).toString(),
                    title:action.payload.title,
                    price:+action.payload.price,
                    count:1
                })
                stateCopy.sum +=action.payload.price
                stateCopy.count++
                return stateCopy
            }
            alert('Не должно быть пустых полей и в поле "цена" должны быть только цифры')
            return state
        case "SUBMIT":
            alert('Заказ оформлен')
            stateCopy.lists=[]
            stateCopy.sum=0
            stateCopy.count=0
            return stateCopy
        case 'PLUS_COUNT':
            stateCopy.lists.forEach(el=>{
                if(el.id===action.payload.id){
                    el.count++
                    stateCopy.sum +=el.price
                    stateCopy.count++
                }
            })
            return stateCopy
        case 'MINUS_COUNT':
            stateCopy.lists.forEach((el,i)=>{
                if(el.id===action.payload.id){
                    el.count--
                    stateCopy.sum -=el.price
                    stateCopy.count--
                    if(el.count===0){
                        stateCopy.lists.splice(i,1)
                    }
                }
            })
            return stateCopy
        default:
            return state
    }
}
export default cartReducer
