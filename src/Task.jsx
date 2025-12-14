import { MdCheck } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdBrush } from "react-icons/io";
import { MdBeachAccess } from "react-icons/md";
import {useSnack } from "./context1/Toast";
import { useState } from "react";
import PopDel from "./PopDel";
import PobUp from "./PobUp";
import {useRed } from "./context3/Reducer";


export default function Task({ob}) {
    
    const {arr,dispach} = useRed()
    const {showSnackBar} = useSnack()

    const [showD,setShowD] = useState(false)
    const [showU,setShowU] = useState(false)
        
    //functions
    function hanldeDone() { // update the value of isCompleted
        dispach({type:"done",payload:{
            ob
        }})
        showSnackBar("تم الإنجاز")
    }
    //---------------//
    function handleDel() { // show the pop
        setShowD(true)
    }
    //--------------//
    function handleUp() {
        setShowU(true)
    }
    //functions
    return (
        <>
        <div className="bg-[#333] flex items-center justify-between rounded-md w-full h-[100px] p-3 relative my-7 hover:shadow-md hover:shadow-[#33333377] hover:-translate-y-[6px] duration-[0.3s]">
            <MdBeachAccess className=" text-orange-400 absolute top-[-18px] left-[-15px] text-[30px]"/>
            <ul className=" flex justify-center text-white mr-3 flex-1">
                <li className="p-2"><MdCheck style={{backgroundColor: ob.isComp ? "green" : "", color: ob.isComp ? "white" : ""}} className="text-green-600 cursor-pointer bg-white hover:text-white text-[20px] rounded-full w-[25px] h-[25px] p-1 border-[1.5px] border-solid border-green-600 hover:bg-green-600 duration-[0.3s]" onClick={(hanldeDone)}/></li>
                <li className="p-2"><MdDelete className="text-red-600 cursor-pointer text-[20px] rounded-full bg-white w-[25px] h-[25px] p-1 border-[1.5px] border-solid border-red-600  hover:bg-red-600 hover:text-white  duration-[0.3s]" onClick={(handleDel)}/></li>
                <li className="p-2"><IoMdBrush className="text-blue-600 cursor-pointer  text-[20px] rounded-full bg-white w-[25px] h-[25px] p-1 border-[1.5px] border-solid border-blue-600  hover:bg-blue-600 hover:text-white  duration-[0.3s]" onClick={(handleUp)}/></li>
            </ul>
            <div className="text-white text-end basis-[70%] p-2">
                {/* main task with adding del and update */}
                <p className=" font-bold" style={{textDecoration:ob.isComp? "line-through":"none"}}>{ob.name}</p> 
                <p className=" text-[#c4c3c3]">{ob.details}</p>
                {/* main task with adding del and update */}
            </div>
        </div>
        {/* show popDel && popUp */}
          <PopDel show={showD} setShow={setShowD} ob={ob}/>
          <PobUp show={showU} setShow={setShowU} ob={ob}/>
        {/* show popDel */}
        </>
    )
}