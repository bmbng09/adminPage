// Menangani tombol approve dan reject
document.querySelectorAll('.approve-btn').forEach(button => {
    button.addEventListener('click', () => {
      const courseCard = button.closest('.course-card');
      alert('Course approved!');
      courseCard.style.display = 'none'; // Menghapus course dari daftar
    });
  });
  
  document.querySelectorAll('.reject-btn').forEach(button => {
    button.addEventListener('click', () => {
      const courseCard = button.closest('.course-card');
      alert('Course rejected!');
      courseCard.style.display = 'none'; // Menghapus course dari daftar
    });
  });
  