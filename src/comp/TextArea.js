import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from './logika/uiSlice'
import './ToDo.css'
import cancel from './foto/cancel.svg'

export const TextArea=(props)=>{
    let dispatch = useDispatch()
    let [todo, settodo]=useState({
        text: '',
        textid: Math.random().toString(),
        bool: false,
    })
   
    function textArea(e){
        settodo({
            ...todo,
            text: e.target.value,
            bool: e.target.value.trim()!=='',
        })
    }

    function click(){

        dispatch(uiActions.getCollum({id: props.id, text: todo.text, textid: todo.textid}))

        settodo({
            text: '',
        })
        props.open()
    }
    function closetextarea(){
        props.close()
    }

    return(
        <div key={props.id + 5}>
            <div className="todo textarea-todo">
                <textarea onChange={textArea} value={todo.text} className='textarea' autoFocus={true}/>
                    <div className="todo-btn-all">
                        <button className="todo-btn " disabled={!todo.bool} onClick={click}>Добавить карточку</button>
                        <button className="todo-delet todo-delet-2" onClick={closetextarea}><img src={cancel} alt="logo"/></button>
                    </div>
            </div>
        </div>
    )
}