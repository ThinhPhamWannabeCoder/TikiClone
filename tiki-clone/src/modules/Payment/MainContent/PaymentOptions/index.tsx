import  { useEffect, useState } from "react";
import ContentBox from "../../../../components/Common/ContentBox";
import PrimaryTitle from "../../../../components/Title/PrimaryTitle";
import productApi from "../../../../services/buyer.services";
import { PaymentOptionsType } from "../../../../types/user.types";
import { useDispatch } from "react-redux";
import { updatePayment } from "../../../../redux/order/orderSlice";
const ASSET_API = import.meta.env.VITE_ASSETS_URL

export default function PaymentOptions() {
    // REDUX
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState<number>();
    const [paymentOptions, setPaymentOptions] = useState<PaymentOptionsType[]>([])
    const handleRadioChange = (e) => {
        setSelectedOption(Number(e.target.value)); // Convert value to a number if needed
    };
    useEffect(()=>{
        productApi.getPayments()
            .then(res =>{
                // console.log(res.data)
                setPaymentOptions(res.data)
                res.data.forEach(item=>{
                    if(item.default == true){
                        setSelectedOption(item.id)
                    }
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    },[])

    useEffect(()=>{
        dispatch(updatePayment(selectedOption as number))
    },[selectedOption])

    if(!paymentOptions){
        return "waiting"
    }
    return (
        <ContentBox class="flex flex-col gap-3">
            <PrimaryTitle name="Chọn hình thức thanh toán" />
            <div className="flex flex-col gap-3">
                {paymentOptions.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                        <input
                            type="radio"
                            id={`payment-option-${item.id}`}
                            name="payment-option" // Group radio buttons by name
                            value={item.id}
                            checked={selectedOption == item.id}
                            onChange={handleRadioChange}
                            className="rounded-full h-5 w-5"
                        />
                        <label htmlFor={`payment-option-${item.id}`} className="flex items-center">
                            <img src={`${ASSET_API}${item.Icon.url}`} alt="" className="object-cover mr-3  w-10 h-10" />
                            <span>{item.name}</span>
                        </label>
                    </div>
                ))}
            </div>
           
            
        </ContentBox>
    );
}
