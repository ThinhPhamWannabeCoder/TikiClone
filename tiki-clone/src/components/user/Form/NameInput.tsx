import { useState } from "react";

interface myProps{
    name: string,
    nickname: string
}
export default function NameInput(prop: myProps){
    const [name, setName] = useState(prop.name||'');
    const [nickname, setNickname] = useState(prop.nickname||'');

    const handleNameChange =(event)=>{
        setName(event.target.value)
    }
    const handleNickNameChange =(event)=>{
        setNickname(event.target.value)
    }
    return(
        <div className="ml-5 flex flex-col gap-4">
            <label className="flex items-center">
                <span className="w-36">Họ & Tên</span>
                <input
                    type="text" 
                    name="name"
                    value={name}
                    placeholder="Thêm Họ & Tên"
                    className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleNameChange}
                />
            </label>
            <label className="flex items-center">
                <span className="w-36">Nickname</span>
                <input 
                    type="text" 
                    name="nickname"
                    value={nickname}
                    placeholder="Thêm Nickname"
                    onChange={handleNickNameChange}
                    className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </label>
        </div>
    )
}