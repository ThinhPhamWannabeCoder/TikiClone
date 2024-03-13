import { useState } from "react";

interface myProps{
    name: string ,
    nickname: string |null,
    setName: (input:string) => void,
    setNickname: (input:string|null) =>void,

}
export default function NameInput(prop: myProps){
    const nameHandler = (e)=>{
        prop.setName(e.target.value)
        // console.log(e.target.value)
    }
    const nickNameHanlder=(e)=>{
        // if(e.target.value === ''){
        //     prop.setNickname(null)
        //     console.log(prop.nickname)
        // }
        prop.setNickname(e.target.value)
    }
    return(
        <div className="ml-5 flex flex-col gap-4">
            <label className="flex items-center">
                <span className="w-36">Họ & Tên</span>
                <input
                    type="text" 
                    name="name"
                    value={prop.name}
                    placeholder="Thêm Họ & Tên"
                    className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={nameHandler}
                />
            </label>
            <label className="flex items-center">
                <span className="w-36">Nickname</span>
                <input 
                    type="text" 
                    name="nickname"
                    value={prop.nickname}
                    placeholder="Thêm Nickname"
                    onChange={nickNameHanlder}
                    className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </label>
        </div>
    )
}