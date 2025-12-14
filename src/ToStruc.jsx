import { useState } from "react";
import Task from "./Task";
import { useEffect,useMemo} from "react";
import { useSnack } from "./context1/Toast";
import { useRed } from "./context3/Reducer";


export default function ToStruc() {
    const {arr,dispach} = useRed()
    const {showSnackBar} = useSnack()
    const [input,setIn] = useState("")
    const [dsplayTask,setDisplayTask] = useState("all")
    
    //filter array //
    const completedTask = useMemo(() => {
        return arr.filter((task) => {
            return task.isComp
    })
    },[arr])
        
    const notCompletedTask = useMemo(() => {
       return arr.filter((task) => {
        return !task.isComp
    })
    },[arr]) 
  //filter array //
    //redner
    let renderAray = arr
    if(dsplayTask == "comp") {
        renderAray = completedTask
    } else if(dsplayTask == "not-comp") {
        renderAray = notCompletedTask
    } else {
        renderAray = arr
    }
    const taskShow = renderAray.map((ta) => {
        return <Task key={ta.id} ob={ta}/>
    //redner
    })
    // function 
    function handleAdd() { // add new task to array
        dispach({type:"added",payload:{
            title:input
        }})
        setIn("")
        if(input!=="") {
            showSnackBar("تم الإضافة بنجاح")
        }
    }


    function handleDIsplay(e) {
        setDisplayTask(e.target.value);
    }
    useEffect(() => {
        dispach({type:"get"})
   },[])
    // function
    return (
        <>
        <div className="w-[600px] rounded-md bg-white p-5 border-2 max-h-[500px] overflow-scroll border-solid border-orange-400">
            <h1 className="text-[#333333] font-extrabold text-center text-[70px]">مهماتي</h1>
            <hr className="bg-[#333333b7] h-[1.5px]"></hr>
            <div className=" flex justify-center p-2 items-center">
                {/* devide the tasks in three section */}
                <button value={"not-comp"} onClick={(handleDIsplay)} style={{backgroundColor:dsplayTask == "not-comp" ? "#333" : "white" ,color:dsplayTask=="not-comp"?"white":"#333"}} className="border-2 border-solid border-[#333] font-bold py-[6px] px-[14px] rounded-md cursor-pointer text-[#333] mr-1 duration-[0.3s] hover:bg-[#333] hover:text-white my-4">غير منجزة</button>
                <button value={"comp"} onClick={(handleDIsplay)} style={{backgroundColor:dsplayTask == "comp" ? "#333" : "white", color:dsplayTask=="comp"?"white":"#333"}}  className="border-2 border-solid border-[#333] font-bold py-[6px] px-[14px] rounded-md cursor-pointer text-[#333] mr-1 duration-[0.3s] hover:bg-[#333] hover:text-white"> منجزة</button>
                <button value={"all"} onClick={(handleDIsplay)} style={{backgroundColor:dsplayTask == "all" ? "#333" : "white" ,color:dsplayTask=="all"?"white":"#333"}} className="border-2 border-solid border-[#333] font-bold py-[6px] px-[14px] rounded-md cursor-pointer text-[#333] mr-1 duration-[0.3s] hover:bg-[#333] hover:text-white">الكل</button>
                {/* devide the tasks in three section */}
            </div>

            {/* Task Show*/}
                {taskShow}
            {/* Task Show */}

            {/* button and input */}
            <div className=" p-3 flex items-center justify-between">
                <button className=" text-white font-bold bg-pink-700 border-[1.5px] border-solid border-pink-700 p-2 w-[120px] rounded-md duration-[0.3s] basis-[30%] mr-2" style={{backgroundColor:input=="" ? "white":'', color:input==""?'#be185d':"white"}} onClick={(handleAdd)}>إضافة</button>
                <input value={input} onChange={(e) => {
                    setIn(e.target.value)
                }} type="text" placeholder="إضافة مهمة" className=" basis-[70%] p-2 rounded-md text-end placeholder:text-end outline-none border-[1.5px] border-solid border-[#333] placeholder:duration-[0.3s] focus:placeholder:text-transparent"/>
            </div>
            {/* button and input */}
        </div>
        </>
    )
}