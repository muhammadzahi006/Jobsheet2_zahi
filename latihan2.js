// ==========================================
// BAGIAN 2: DATA REPRESENTATION & ARRAY OF OBJECTS
// ==========================================

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// Latihan 2.1: Mencari Produk dengan find()
function findProductById(products, id) {
  return products.find(p => p.id === id);
}

console.log("\n=== Latihan 2.1 ===");
console.log("Cari Produk ID 2:", findProductById(products, 2));

// Latihan 2.2: Stok Menipis (< 10) dengan filter()
function getLowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}

console.log("\n=== Latihan 2.2 ===");
console.log("Produk Stok < 10:", getLowStockProducts(products));

// Latihan 2.3: Mengubah Data Tanpa Mutasi (Immutable Update)
function updateStock(products, id, newStock) {
  return products.map(p => 
    p.id === id ? { ...p, stock: newStock } : p
  );
}

console.log("\n=== Latihan 2.3 ===");
console.log("Update Stok ID 1 (Hasil Baru):", updateStock(products, 1, 50));
console.log("Array Asli (Tetap Tidak Berubah):", products);
