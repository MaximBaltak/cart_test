import {cardI} from "./reducerTypes";

type ADD='ADD'
type SUBMIT='SUBMIT'
type PLUS_COUNT='PLUS_COUNT'
type MINUS_COUNT='MINUS_COUNT'
type GET='GET'

export interface addFormI{
    title:string,
    price:number
}
export interface minusI{
    id:string
}
export interface plusI{
    id:string
}
export interface actionAddI{
    type:ADD,
    payload:addFormI
}
export interface actionSubmitI{
    type:SUBMIT
}

export interface actionGetList{
    type:GET,
    payload:cardI[]
}
export interface actionMinusCountI{
    type:MINUS_COUNT,
    payload:minusI
}
export interface actionPlusCountI{
    type:PLUS_COUNT,
    payload:plusI
}
