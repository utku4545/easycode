document.addEventListener('DOMContentLoaded', () => {
  // Menü aç/kapa
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  menuBtn?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });

  // Ders filtreleme butonları
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lessons = document.querySelectorAll('.lesson-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      lessons.forEach(lesson => {
        if(category === 'all' || lesson.classList.contains(category)){
          lesson.style.display = 'block';
        } else {
          lesson.style.display = 'none';
        }
      });

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Karanlık mod toggle
  const darkToggle = document.getElementById('dark-toggle');
  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
