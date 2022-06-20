import { useState } from "react"
import { useSelector } from "react-redux"
import { RenderTodo } from "./RenderTodo"
import { ToDo } from "./ToDo"
import './ToDo.css'

export const AllToDo = () =>{
    let [showstate, setShow]=useState(false)
    let store = useSelector(store=>store.ui.collum)
   
    function show(){
        setShow(true)
    }
    function collum(){
        setShow((p)=>p = !p)
    }

    function close(){
        setShow(false)
    }

    return(
        <div className="render" key={Math.random().toString()}>
            {store.map((item)=>(<RenderTodo title={item.title} id={item.id} collumdata={item.collumdata} class={item.display}/>))}
            {(showstate && <ToDo func={show} close={close}/>) || <button className="show-btn" onClick={collum}><p>+</p> Добавить еще одну колонку </button>}
        </div>
    )
}