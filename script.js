  // script.js
        const baten = document.getElementById('baten');

        // Menambahkan event listener untuk tombol
        baten.addEventListener('click', () => {
            // Mengubah kelas body untuk mode gelap
            document.body.classList.toggle('dark-mode');

            // Mengubah teks tombol sesuai dengan mode
            if (document.body.classList.contains('dark-mode')) {
                baten.textContent = 'celii imut';
            } else {
                baten.textContent = 'celiii';
            }
        });