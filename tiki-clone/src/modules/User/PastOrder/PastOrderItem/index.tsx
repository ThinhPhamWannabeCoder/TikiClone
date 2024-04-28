import ContentBox from "../../../../components/Common/ContentBox";

export default function PastOrderItem(){
    return(
        // DON'T NEED STORE
        <ContentBox class="p-6">
            {/* STATUTS */}
            <div className="text-slate-500 border-b border-slate-500 pb-3">
                Giao hàng thành công
            </div>
            <div className="">
            
                <div className="border-b border-slate-500 py-3 flex ">
                    <img src="https://placehold.co/70x70/png" alt="" srcset="" />
                    <div className=" w-full ml-3">
                        <div className="flex justify-between w-full">
                            <div>Sách vở</div>
                            <div>100.000</div>
                        </div>
                        <div className="text-slate-400">
                            Apple Store
                        </div>
                    </div>
                    
                </div>
                <div className="border-b border-slate-500 py-3 flex ">
                    <img src="https://placehold.co/70x70/png" alt="" srcset="" />
                    <div className=" w-full ml-3">
                        <div className="flex justify-between w-full">
                            <div>Sách vở</div>
                            <div>100.000</div>
                        </div>
                        <div className="text-slate-400">
                            Apple Store
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className="pt-3 text-right">
                Tổng tiền: 190.550
            </div>
            {/* LIST OF PRODUCTS */}
            {/* TOTAL PRICE */}
        </ContentBox>
    )
}