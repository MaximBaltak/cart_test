import {actionAddI, actionGetList, actionMinusCountI, actionPlusCountI, actionSubmitI} from "./actionTypes";

export type actionTypeCart=actionAddI|actionSubmitI|actionGetList|actionPlusCountI|actionMinusCountI
export interface cardI{
    id:string
    title:string,
    price:number,
    count:number
}
export interface stateCartI{
    lists:cardI[],
    sum:number
    count:number
}

// export interface cartReducerI{
//     (state:stateCartI,action:actionTypeCart):stateCartI
// }
