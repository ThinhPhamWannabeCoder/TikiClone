import unidecode from "unidecode"; // Import unidecode library

function formatCurrency(amount: number|string) {
    // Đảm bảo rằng input là một số
    if (typeof amount !== 'number') {
      amount = Number(amount);
      if (isNaN(amount)) {
        throw new Error("Invalid input: not a number");
      }
    }
  
    // Sử dụng phương thức toLocaleString để định dạng số tiền
    return amount.toLocaleString('vi-VN');
  }
  
  // Ví dụ sử dụng hàm
  function parseCurrency(input: number)  {
    // Loại bỏ dấu phân cách ngàn
    const numberString = input.replace(/\./g, '');
    // Chuyển đổi chuỗi kết quả về dạng số
    return numberString
  }
  function convertToSlug (text:string) {
    const x =  unidecode(text)
        .toLowerCase() // Convert text to lowercase
        .replace(/ - /g,"-")
        .replace(/[^\w\s-]/g, "") // Remove non-word characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .trim(); // Trim leading and trailing spaces
    return x
  };    
function checkPositiveNumber(input :number|string) {
  console.log(input);
}
export {unidecode, formatCurrency, checkPositiveNumber, parseCurrency, convertToSlug}