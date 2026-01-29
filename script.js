/* Dasar */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
}

header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
}

/* Katalog Produk */
.product-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 2rem 5%;
}

.product-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

/* Tombol */
button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}

/* Halaman Keranjang */
.cart-container {
    padding: 2rem 5%;
    max-width: 800px;
    margin: auto;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Memberi pilihan ke pengguna
    if (confirm(name + " berhasil ditambah! Lihat keranjang sekarang?")) {
        window.location.href = "cart.html"; // Pindah ke halaman cart.html
    } else {
        updateCartCount();
    }
}