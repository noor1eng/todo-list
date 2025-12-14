import SnackBar from "./SnackBar"
import ToStruc from "./ToStruc"
import {SnackProvider } from "./context1/Toast"
import { ReducerProvider } from "./context3/Reducer"
function App() {
  return (
    <>
    <ReducerProvider>
    <SnackProvider>
       <div className="App container mx-auto w-full my-[50px] flex justify-center items-center">
          <ToStruc/>
        <SnackBar/>
       </div>
    </SnackProvider>
    </ReducerProvider>
  </>
  )
}

export default App
