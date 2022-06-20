import { useState } from "react"
import { useDispatch } from "react-redux"
import { uiActions } from "./logika/uiSlice"
import './ToDo.css'

export const ModalRename = (props) =>{
    let dispatch = useDispatch()
    let [newtext, setnewtext]=useState({
        text: '',
        textid: Math.random().toString(),
        pokaz: false,
    })

    function getnewtext(e){
        setnewtext({
            ...newtext,
            text: e.target.value,
            pokaz: e.target.value.trim()!=='',
        })
    }
    console.log(props.textid);
    function renamecollum(){
        if((props.id !=='404almaz') && (props.textid !== undefined) && (props.textid !== '405') ){
            dispatch(uiActions.renameCollum({id: props.id, textid: props.textid, text: newtext.text, newtextid: newtext.textid}))
        }else if((props.id !=='404almaz') && (props.textid === undefined) && (props.textid !== '405')){
            dispatch(uiActions.renameTitle({id: props.id, title: newtext.text}))
        }
        props.pokaz()
    }
    if(props.class && props.class2 && props.class3){
       return (<div className={props.class}>
            <div className={props.class2}>
                <div className={props.class3}>
                    <p>{props.text}</p>
                    <p>В колонке: {props.title}</p>
                </div>
                <div>
                    <input autoFocus={true} type='text' onChange={getnewtext} value={newtext.text} placeholder={props.text}/>
                    <button disabled={!newtext.pokaz} onClick={renamecollum}>Переименовать</button>
                </div>       
            </div>
        </div>)
    }else{
      return(
        <div className="modal-rename">
            <div className="modal-box">
                <div className="modal-p">
                    <p>{props.text}</p>
                    <p>В колонке: {props.title}</p>
                </div>
                <div>
                    <input type='text' onChange={getnewtext} value={newtext.text} placeholder={props.text}/>
                    <button disabled={!newtext.pokaz} onClick={renamecollum}>Переименовать</button>
                </div>       
            </div>
        </div>
    )  
    }
    
}