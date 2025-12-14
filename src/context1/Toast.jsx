import { createContext,useContext,useState } from "react";
import SnackBar from "../SnackBar";

 const Snack = createContext({})


export const SnackProvider = ({children}) => {
     const [snack,setSnack] = useState(false)
     const [mg,setMg] = useState("")
     const [bg,setBg] = useState("green")
    
      function showSnackBar(massege,bg) {
      setSnack(true)
      setMg(massege)
      setBg(bg)
      setTimeout(() => {
        setSnack(false)
      }, 2000);
    }

    return (
        <Snack.Provider value={{showSnackBar}}>
            {children}
            <SnackBar show={snack} massege={mg} bg={bg}/>
        </Snack.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSnack = () => {
    return useContext(Snack)
}

