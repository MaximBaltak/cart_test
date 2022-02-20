import price from './../../list.json'
import {actionGetList} from "../types/actionTypes";
const ActionGetList=():actionGetList=>{
    return {
        type:"GET",
        payload:Array.from(price)
    }
}
export default ActionGetList
