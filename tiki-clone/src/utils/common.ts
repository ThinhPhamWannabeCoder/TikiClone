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

  
export {unidecode, formatCurrency}