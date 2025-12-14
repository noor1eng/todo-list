import {useSnack } from "./context1/Toast";
import { useRed } from "./context3/Reducer";

export default function PopDel({show,setShow,ob}) {
    const {arr,dispach} = useRed()
    const {showSnackBar} = useSnack()
    if(!show) return null 
    else {
        return (
            <div className="w-full bg-[#00000080] h-[100vh] absolute top-0 left-0 z-10">
            <div className=" relative bg-[#333] w-[400px] p-3 h-[140px] rounded-md text-white mx-auto translate-y-[30vh]">
                <h2 className=" text-center text-[20px] mb-2 font-bold">هل تريد التأكيد على حذف المهمة؟</h2>
                <div className="absolute bottom-3 left-3">
                    <button className=" mr-4 w-[100px] py-1 px-2 bg-white font-bold text-red-600 border-[1.5px] border-solid border-red-600 rounded-md hover:text-white hover:bg-red-600 duration-[0.3s]" onClick={() => {
                        setShow(false)
                    }}>إلغاء</button>
                    <button className="w-[100px] py-1 px-2 bg-white font-bold text-red-600 border-[1.5px] border-solid border-red-600 rounded-md hover:text-white hover:bg-red-600 duration-[0.3s]" onClick={() => {
                        dispach({type:"delete",payload:{
                            ob
                        }})
                         showSnackBar("تم الحذف بنجاح","red")
                         setShow(false)
                        }}>حذف</button>
                </div>
            </div>
            </div>
        )
    }
}