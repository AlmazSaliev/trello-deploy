import { createSlice } from "@reduxjs/toolkit"
const initialState={
    userdata: {email: 'peaksoft@piko.com', password: 'peaksoft', emailerror: false, passworderror: false},
    collum: [],
    searchTitle: {},
    justobj: {},
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        getuserdata: (state, action)=>{
            if(action.payload.email === state.userdata.email){
                state.userdata.emailerror = true
            }
            if(action.payload.password === state.userdata.password){
                state.userdata.passworderror = true
            }
        },
       getData: (state, action)=>{
        const data = {
            title: action.payload.title,
            id: action.payload.id,
            display: '',
            collumdata: []
        }
         state.collum.push(data)
       },
       getCollum: (state, action)=>{
        state.collum.find((i)=>i.id === action.payload.id).collumdata.push({text: action.payload.text, textid: action.payload.textid})
        
       },
       renameCollum: (state, action)=>{
        state.collum.find((i)=>i.id===action.payload.id).collumdata.find((i)=>i.textid===action.payload.textid).text = action.payload.text
       },
       renameTitle: (state, action)=>{
        state.collum.find((i)=>i.id===action.payload.id).title = action.payload.title
       },
       deletItem: (state, action)=>{
        let d = state.collum.find((i)=>i.id===action.payload.id).collumdata.indexOf(`${action.payload.text}`)
            
            if((d+1) !== -1){
                state.collum.find((i)=>i.id===action.payload.id).collumdata.splice((action.payload.index), 1)
            }
       },
       searchtittle: (state,action)=>{
        state.searchTitle = action.payload
       },
       displaynone: (state, action)=>{
        state.collum.find((i)=>i.id===action.payload).display = 'displaynone'
       },
       objsearch: (state)=>{
        let a = {}
        let b = state.searchTitle.collumdata.map((i)=>{
            a.text = i.text;
            a.textid = i.textid;
            return i
        })
        console.log(b);
        state.justobj = a
       },
       openarhive: (state, action)=>{
       state.collum.find((i)=>i.display === action.payload).display = '';
       }

    }
})
export const uiActions = uiSlice.actions
export default uiSlice