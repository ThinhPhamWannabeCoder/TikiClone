import  { useState } from "react";
import ContentBox from "../../../../components/Common/ContentBox";
import PrimaryTitle from "../../../../components/Title/PrimaryTitle";

export default function PaymentOptions() {
    // REDUX
    const data = Array.from({ length: 5 }, (_, index) => index + 1);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (e) => {
        setSelectedOption(Number(e.target.value)); // Convert value to a number if needed
    };

    return (
        <ContentBox class="flex flex-col gap-3">
            <PrimaryTitle name="Chọn hình thức thanh toán" />
            <div className="flex flex-col gap-3">
                {data.map((item) => (
                    <div key={item} className="flex gap-4 items-center">
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
                            <span>Thanh toán bằng {item}</span>
                        </label>
                    </div>
                ))}
            </div>
           
            
        </ContentBox>
    );
}
