import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "./logika/uiSlice"
import { ModalRename } from "./ModalRename"
import './WorkStyle.css'
export const Search = ()=>{
    let dispatch = useDispatch()

    let [value,setvalue]=useState('')
    let title = useSelector(title=>title.ui.collum)
    let search = useSelector(title=>title.ui.searchTitle)
    let todo = useSelector(obj=>obj.ui.justobj)
    let [show,setshow]=useState(false)
    let[smolshow, setsmolshow]=useState(false)

    function searchonchange(e){
        setvalue(e.target.value)
    }
    function searchvalue(e){
        if(e.key === 'Enter'){
            let a = title.find((i)=>i.title === value)
            
            let g 
            if(a === undefined){
                g = title.find((i)=>i.collumdata.find((el)=>el.text === value))
            }

            let data
            if(g !== undefined){
               data = g.collumdata.filter((i)=>i.text === value)
            }
            let alldata = {}
            if(data!==undefined){
                alldata.title = g.title;
                alldata.id = g.id;
                alldata.collumdata = data;
            }
            if(a!==undefined){

                dispatch(uiActions.searchtittle(a))
                setsmolshow(true)
            }
            if(JSON.stringify(alldata) !== '{}'){
                dispatch(uiActions.searchtittle(alldata))
                dispatch(uiActions.objsearch())
                setshow(true)
            }
            if(a === undefined && JSON.stringify(alldata) === '{}'){
                dispatch(uiActions.searchtittle({title: 'Таких данных не найдено', id: '404almaz', collumdata: [{text: 'Что-то не так', textid: '405'}]}))
            }
        setvalue('')
        // setshow(p=>!p)
        }
    }
    function pokazModal(){
        setshow(false)
    }
    function smolpokaz(){
        setsmolshow(false)
    }
   
      
        console.log(todo);
        // class={'backimgsearch'} class2={'mod'} class3={'mod-p'}
        // class={'backimgsearch'}  class2={'mod'} class3={'mod-p'}  
    return(
        <div className="search-comp ">
            <div className="modal-search">
                 {show && <ModalRename  pokaz={pokazModal} id={search.id} title={search.title} textid={todo.textid} text={todo.text}/>}
                 {smolshow && <ModalRename pokaz={smolpokaz} id={search.id} title={search.title}/>} 
            </div>
    
            <img className='logo-search' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/750px-Search_Icon.svg.png?20181016161702' alt='logo'/>
            <input autoFocus={true} className='inp-search' onKeyDown={searchvalue} onChange={searchonchange} type='text' placeholder='Поиск'/>
        </div>
    )
}