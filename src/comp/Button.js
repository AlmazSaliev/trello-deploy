import { useDispatch } from "react-redux"
import { uiActions } from "./logika/uiSlice"

export const Button = (props)=>{
    let dispatch = useDispatch()
    return(
        <button className={props.class} onClick={()=>{dispatch(uiActions.openarhive('displaynone'))}}>
                        <p>...</p>
                        Открыть архив
                    </button>
    )
}