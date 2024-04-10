import ContentBox from "../../../components/Common/ContentBox";

export default function SumPrice(prop: {sumPrice: number}) {
    let compo = null; // Bắt đầu với giá trị null cho compo
    if (!prop.sumPrice) {
        // Nếu điều kiện không đúng, hiển thị thông báo
        compo = <div className="text-red-600">Vui lòng chọn sản phẩm</div>;
    }
    else{
        compo = <div className="text-red-600 text-xl">{prop.sumPrice}</div>;
    }

    return (
        <ContentBox>
            <h3>Tổng Tiền</h3>
            {compo}
        </ContentBox>
    );
}