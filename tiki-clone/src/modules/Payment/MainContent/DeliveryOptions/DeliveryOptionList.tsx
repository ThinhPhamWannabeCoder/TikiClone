import { useState } from "react";

export default function DeliveryOptionList(){
    // ORDER REDUX
    const data = Array.from({length: 2}, (_, index) => index+1)
    const [selectedOption, setSelectedOption] = useState(1);

    // DISPATCH REDUX

    const handleRadioChange = (e) => {
        setSelectedOption(Number(e.target.value)); // Convert value to a number if needed
    };

    // HANDLE DELIVERY CHANGE
    
    // USE EFFECT
    return(
        <div className="bg-sky-100 p-5 rounded-md flex flex-col gap-3 w-3/5 justify-center">
            {data.map(item => (
                <div key={item} className="flex gap-4 items-center ">
                    <input
                        type="radio"
                        id={`payment-option-${item}`}
                        name="payment-option" // Group radio buttons by name
                        value={item}
                        checked={selectedOption === item}
                        onChange={handleRadioChange}
                        className="rounded-full h-5 w-5"
                    />
                    <label htmlFor={`payment-option-${item}`} className="flex items-center">
                        <img src="https://placehold.co/40x40/png" alt="" className="object-cover mr-3 rounded-full" />
                        <span>Giao hàng bằng {item}</span>
                        <div className="text-green-500 p-1 bg-slate-100 rounded-sm ml-3">
                            25k
                        </div>
                    </label>
                </div>
            ))}
        </div>
    )
}