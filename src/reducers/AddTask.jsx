import {v4 as uuidv4 } from 'uuid';

export default function Addreducer(currentReducer,action) {
    switch(action.type) {
        case "added" : {
         const task =  [...currentReducer,{id:uuidv4(),name:action.payload.title,details:"",isComp:false}].filter((ta) => ta.name !=="")
         localStorage.setItem("tasks",JSON.stringify(task))
         return task 
        }
        case "delete" : {
            const newAR = currentReducer.filter((taa) => {
                         return taa.id !== action.payload.ob.id
                         })
                         localStorage.setItem("tasks",JSON.stringify(newAR))
                         return newAR
        }
        case "edit" : {
            const newArr = [...currentReducer].map((task) => {
            if(task.id === action.payload.ob.id) {
                return {...task,name:action.payload.name,details:action.payload.details}
            } else {
                return task
            }
        })
        localStorage.setItem("tasks",JSON.stringify(newArr))
        return newArr
        }
        case "done" : {
        const newAR = [...currentReducer].map((taa) => {
            if(taa.id == action.payload.ob.id) {
                if(taa.isComp) {
                    const ob = {...taa,isComp:false}
                    return ob
                } else {
                    const ob = {...taa,isComp:true}
                    return ob
                }
            } else {
                return taa
            }
        })
        localStorage.setItem("tasks",JSON.stringify(newAR))
        return newAR
        }
        case "get" : {
        const StorageTasks = JSON.parse(localStorage.getItem("tasks")) ?? []
        return StorageTasks
        }
         default: {
            throw Error("wrong action")
         }
    }
}