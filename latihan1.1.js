// Latihan 1.1

function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

console.log(calculateDiscountedPrice(100000, 20)); // 80000
console.log(calculateDiscountedPrice(50000, 10));  // 45000

// Latihan 1.2