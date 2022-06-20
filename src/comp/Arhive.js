import { useDispatch } from "react-redux"
import { uiActions } from "./logika/uiSlice"
import './ToDo.css'

export const Arhive = (props)=>{
let dispatch = useDispatch()
function none(){
   dispatch(uiActions.displaynone(props.id))
}
    return (
        <div className="arhive">
            <button onClick={()=>{props.openmodal(); props.close()}}>Редактировать</button>
            <button onClick={()=>{none(); props.close()}}>Архивировать</button>
            <button onClick={props.close} >Закрыть</button>
        </div>
    )
}