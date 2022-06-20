
import { TextArea } from './TextArea'
import { useDispatch } from 'react-redux'
import './ToDo.css'
import pen from './foto/pen.svg'
import delet from './foto/delet.svg'
import repeat from './foto/repeat.svg'
import { useState } from 'react'
import { ModalRename } from './ModalRename'
import { uiActions } from './logika/uiSlice'
import { Arhive } from './Arhive'


export const RenderTodo = (props) =>{
    let dispatch = useDispatch()
    let [textarea, settext]=useState(false)
    let [modal,setmodal]=useState(false)
    let [modal2,setmodal2]=useState(false)
    let[arhive, setarhive]=useState(false)
    let [id, setid]=useState({})

    function openTextarea(){
        settext(true)
    }
    function closeTextarea(){
        settext(false)
    }

    function pokaz(id){
        setmodal(p=>!p)
        setid(id)
    }

    function deletitem(del, index){
        dispatch(uiActions.deletItem({id: props.id, text: del.text, index: index}))
    }
    function showarhivemodal(){
        setmodal2(p=>!p)
    }
   function arhiv(){
    setarhive(p=>!p)
   }

        return(
        <div key={props.id} className={`${props.class}`}>
            <div className="todo">
                <h2>{props.title}</h2>
                { modal && <ModalRename pokaz={pokaz} title={props.title} id={props.id} textid={id.textid} text={id.text}/>}
                { modal2 && <ModalRename pokaz={showarhivemodal} title={props.title} id={props.id}/>}

                { props.collumdata.map((i, index)=>(<div className='map' key={i.textid}>{i.text} <div><button onClick={()=>pokaz(i)}><img src={pen} alt='logo'/></button> <button onClick={()=>deletitem(i.text, index)}><img src={delet} alt='logo'/></button></div></div>))}
                {(textarea && <TextArea id={props.id} open={openTextarea} close={closeTextarea}/>) || <div className="todo-btn-all" key={props.id + 1}>
                        <button className="todo-btn back-btn" onClick={openTextarea}><span>+</span>Добавить карточку</button>
                        <button className="todo-delet todo-delet-2" onClick={arhiv}><img src={repeat} alt='logo'/></button>
                        {arhive && <Arhive close={arhiv} openmodal={showarhivemodal} id={props.id}/>}
                    </div>
                }
            </div>
        </div>
    )
    
}