import { createContext,useContext,useReducer } from "react";
import Addreducer from "../reducers/AddTask";
// eslint-disable-next-line react-refresh/only-export-components
export const ReducerAll = createContext([])

export const ReducerProvider = (({children}) => {
      const [arr,dispach] = useReducer(Addreducer,[])
    return (
        <ReducerAll.Provider value={{arr,dispach}}>
            {children}
        </ReducerAll.Provider>
    )
})
// eslint-disable-next-line react-refresh/only-export-components
export const useRed = () => {
    return useContext(ReducerAll)
}