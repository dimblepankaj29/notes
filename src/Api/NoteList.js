import {NoteListData} from '../constant/constant'

export const getList=()=>{
    const res = new Promise (async (resolve, reject)=>{
        // console.log(NoteListData)
        const data =  NoteListData
         resolve (data)
    })
    res.then(function (data){
        // console.log(data)
         return data
    })
}

                   