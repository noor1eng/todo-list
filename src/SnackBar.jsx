import { MdAddTask } from "react-icons/md";

export default function SnackBar({show,massege="تمت العملية",bg="green"}) {
    return (
        <div style={{display:show==true ? "flex" : "none", backgroundColor:bg}} className="w-[160px] p-3 m-3 rounded-md items-center justify-center text-white text-[15px] absolute bottom-0">
            <div className="mr-1"><MdAddTask/></div>
            <p className="">{massege}</p>
        </div>
    )
}