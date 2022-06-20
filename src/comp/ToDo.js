import { useState } from "react"
import { useDispatch } from "react-redux"
import { uiActions } from "./logika/uiSlice"
import cancel from './foto/cancel.svg'

export const ToDo = (props) =>{
    let dispatch = useDispatch()

    let[value, setValue]=useState({
        title: '',
        id: Math.random().toString(),
        proverkaText: false,
    })

    function onchange(e){
        let getValue = e.target.value
        setValue({
            ...value,
            title: value.title = getValue,
            proverkaText: value.proverkaText = getValue.length !== '',
        })

    }
  
    function btnFunc(){
        
        dispatch(uiActions.getData(value))
        props.func()
        setValue({
            text: '',
            proverkaText: false,
        })
    }
    function btnClose(){
        props.close()
    }

    return(
        <div>
            <div className="todo">
                <input type='text' placeholder="Ввести заголовок списка" onChange={onchange} value={value.text} autoFocus={true}/>
                <div className="todo-btn-all">
                    <button disabled={!value.proverkaText}  onClick={btnFunc} className="todo-btn">Добавить список</button>
                    <button className="todo-delet" onClick={btnClose}><img src={cancel} alt="logo"/></button>
                </div>
            </div>
        </div>
        
    )
}