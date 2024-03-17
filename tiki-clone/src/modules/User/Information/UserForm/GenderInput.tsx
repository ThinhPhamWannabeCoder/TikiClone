
interface myProps {
    gender: string,
    setGender: (input: string) => void
}

import { useState } from "react";

export default function GenderInput(props: myProps){
    // const [gender, setGender] = useState(props.gender||'');

    const handleGenderChange = (e) => {
        props.setGender(e.target.value);
    };

    return (
        <div className="flex items-center py-8">
            <h3 className="w-24">Giới tính</h3>
            <div className="flex gap-3 radio-container">
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={props.gender === 'male'}
                    onChange={handleGenderChange}
                    className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"

                />
                <label>Nam</label><br />
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={props.gender === 'female'}
                    onChange={handleGenderChange}
                    
                    className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                />
                <label>Nữ</label><br />
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={props.gender === 'other'}
                    onChange={handleGenderChange}
                    className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"

                />
                <label>Khác</label>
            </div>
        </div>
    );
}