const fotoProfile = document.querySelector('.foto-profile');

fotoProfile.addEventListener('mousemove', (event) => {
    // Dapatkan ukuran dan posisi elemen
    const rect = fotoProfile.getBoundingClientRect();
    const x = event.clientX - rect.left; // Posisi X kursor relatif terhadap elemen
    const y = event.clientY - rect.top;  // Posisi Y kursor relatif terhadap elemen

    // Batas rotasi lebih besar untuk efek lebih mencolok
    const rotateX = ((y / rect.height) - 0.5) * -30; // Rotasi sumbu X, max -15 hingga 15 derajat
    const rotateY = ((x / rect.width) - 0.5) * 30;   // Rotasi sumbu Y, max -15 hingga 15 derajat

    // Terapkan transformasi 3D
    fotoProfile.style.transform = `translate(-50%, 78%) perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Saat kursor keluar dari elemen, kembalikan posisi semula
fotoProfile.addEventListener('mouseleave', () => {
    fotoProfile.style.transform = 'translate(-50%, 78%) perspective(500px) rotateX(0) rotateY(0)';
});