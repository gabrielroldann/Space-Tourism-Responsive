const menu = document.querySelector('#menu');
const openMenu = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#close-menu");


openMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
  openMenu.style.display = 'none';
})

closeMenu.addEventListener("click", () => {
  menu.style.display = 'none';
  openMenu.style.display = 'flex';
})