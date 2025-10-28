  const menuMobile = document.getElementById('menu-mobile');
  const menuBtn = document.getElementById('menu-btn');

  menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
  });