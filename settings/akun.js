document.addEventListener('DOMContentLoaded', () => {
    // Toggle Password Visibility
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling; // Input sebelum tombol
            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = 'Hide';
            } else {
                input.type = 'password';
                btn.textContent = 'Show';
            }
        });
    });

    // Form Submission
    const accountForm = document.querySelector('#account-form');
    accountForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah reload halaman
        const formData = new FormData(accountForm);

        // Validasi
        const email = formData.get('email');
        const password = formData.get('password');
        if (!email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulasi Simpan Data
        console.log('Account Data:', {
            email: email,
            password: password,
        });

        // Tampilkan notifikasi berhasil
        alert('Account settings updated successfully!');
    });
});
