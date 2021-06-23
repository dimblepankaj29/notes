import {NoteListData} from '../constant/constant'

export const getList=()=>{
   return new Promise (async (resolve, reject)=>{
         resolve (NoteListData)
    })
    
}

                   