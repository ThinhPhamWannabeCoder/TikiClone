import ContentBox from "../../../components/Common/ContentBox";

// const data = [
//     {
//         title: 'Thương hiệu',
//         detail: 'SIMPLE',
//     },
//     {
//         title: 'Xuất xứ thương hiệu',
//         detail: 'Ba Lan',
//     },
//     {
//         title: 'Xuất xứ (Made in)',
//         detail: 'Ba Lan',
//     },
//     {
//         title: 'Thành phần',
//         detail: 'Aqua, Hamamelis Virginiana Leaf Water, Cocamidopropyl Betaine, Glycerin, Sodium Laureth Sulfate, PEG-7 Glyceryl Cocoate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Benzophenone-4, Citric Acid, Hydrated Silica, Hydroxypropyl Cyclodextrin, Iodopropynyl Butylcarbamate, Niacinamide, Panthenol, Pantolactone, Phenoxyethanol, Potassium Sorbate, Sodium Benzoate, Sodium Chloride, Sodium Hydroxide, Thymus Vulgaris Flower/Leaf Extract, Xanthan Gum, Zinc PCA.',
//     },
//     {
//         title: 'Hạn sử dụng',
//         detail: '3 năm kể từ ngày sản xuất',
//     },
//     {
//         title: 'Loại da phù hợp',
//         detail: 'Da dầu, Da thường',
//     },
//     {
//         title: 'Sản phẩm có được bảo hành không?',
//         detail: 'Không',
//     }
// ]
interface Detail{
  title: string,
  desc: string
}

export default function Detail(prop:{data: Detail[]}) {
    // prop.keys()
  //   for (const [key, value] of Object.entries(prop)) {
  //     console.log(key, value);  // Outputs "thinh dep trai", "tien giau"
  // }
    return (
      <ContentBox>
      
        <h1 className="text-xl font-bold pb-2">Thông tin chi tiết</h1>
        {prop.data.map((x, index) => (
          <div
            key={index} // Add a unique key if objects lack an id
            className={`flex items-center border-b-2 border-slate-200 py-1 ${
              index !== prop.data.length - 1 ? '' : 'last:border-b-0'
            }`}
          >
            <h3 className="flex-1">{x.title}</h3>
            <p className="flex-1">{x.desc}</p>
          </div>
        ))}
        {
        }
      </ContentBox>
    );
  }