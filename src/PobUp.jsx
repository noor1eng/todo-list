import { useState } from "react"
import { useSnack } from "./context1/Toast";
import { useRed } from "./context3/Reducer";


export default function PobUp({show,setShow,ob}) {
    const {arr,dispach} = useRed()
    const {showSnackBar} = useSnack()
    const [upTask,setUp] = useState({title:ob.name,detalils:ob.details})
    

    function handleEdit() {
        dispach({type:"edit",payload:{
            ob:ob,
            name:upTask.title,
            details:upTask.detalils

        }})
        setShow(false)
        showSnackBar("تم التعديل بنجاح","#0062ff")
    }    
    if(!show) return null
     else {
        return (
            <div className="w-full bg-[#00000080] h-[100vh] absolute top-0 left-0 z-10">
                <div className=" relative bg-[#333] w-[430px] p-3 h-[200px] rounded-md text-white mx-auto translate-y-[30vh]">
                    <div className=" text-end text-white text-[18px] font-bold">تعديل مهمة</div>
                    <div className=" flex flex-col justify-center mt-2">
                        <input value={upTask.title} onChange={(e) => {
                            setUp({...upTask,title:e.target.value})
                        }} className=" bg-[#333] mb-4 rounded-sm placeholder:duration-[0.3s] text-end placeholder:text-end focus:placeholder:text-transparent placeholder:text-[13px] p-1 outline-none border-b border-solid border-b-slate-400" placeholder="تعديل العنوان"></input>
                        <input value={upTask.detalils} onChange={(e) => {
                            setUp({...upTask,detalils:e.target.value})
                        }} className=" bg-[#333] rounded-sm placeholder:duration-[0.3s] text-end placeholder:text-end focus:placeholder:text-transparent placeholder:text-[13px] p-1 outline-none border-b border-solid border-b-slate-400" placeholder="تعديل التفاصيل"></input>
                    </div>
                    <div className="absolute bottom-3 left-3">
                        <button className=" mr-4 w-[100px] py-1 px-2 bg-white font-bold text-red-600 border-[1.5px] border-solid border-red-600 rounded-md hover:text-white hover:bg-red-600 duration-[0.3s]" onClick={() => {
                            setShow(false)
                        }}>إلغاء</button>
                        <button className="w-[100px] py-1 px-2 bg-white font-bold text-red-600 border-[1.5px] border-solid border-red-600 rounded-md hover:text-white hover:bg-red-600 duration-[0.3s]" onClick={(handleEdit)}>تعديل</button>
                    </div>
                </div>
                </div>
        )
    }
}