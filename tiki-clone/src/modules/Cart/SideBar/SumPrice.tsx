import ContentBox from "../../../components/Common/ContentBox";

export default function SumPrice() {
    const condition = false; // Giả sử condition này làm mẫu
    let compo = null; // Bắt đầu với giá trị null cho compo

    if (!condition) {
        // Nếu điều kiện không đúng, hiển thị thông báo
        compo = <div className="text-red-600">Vui lòng chọn sản phẩm</div>;
    }

    return (
        <ContentBox>
            <h3>Tổng Tiền</h3>
            {compo}
        </ContentBox>
    );
}