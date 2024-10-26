function calculateCompoundInterest(principal, rate, months) {
    let totalAmount = principal; // Bắt đầu với số tiền ban đầu

    // Vòng lặp để tính lãi hàng tháng
    for (let month = 1; month <= months; month++) {
        // Tính lãi cho tháng này
        const interest = totalAmount * (rate / 100);
        totalAmount += interest; // Cộng lãi vào tổng số tiền
    }

    return totalAmount;
}

// Ví dụ sử dụng
const principal = 1000000; // Số tiền ban đầu
const rate = 1; // Lãi suất hàng tháng (%)
const months = 12; // Số tháng cho vay

const totalAmount = calculateCompoundInterest(principal, rate, months);
const interestEarned = totalAmount - principal; // Tính lãi kiếm được

console.log(`Số tiền ban đầu: ${principal.toLocaleString()} VNĐ`);
console.log(`Lãi suất hàng tháng: ${rate}%`);
console.log(`Số tháng cho vay: ${months}`);
console.log(`Tổng số tiền sau ${months} tháng: ${totalAmount.toLocaleString()} VNĐ`);
console.log(`Lãi kiếm được: ${interestEarned.toLocaleString()} VNĐ`);
