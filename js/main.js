const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

if (menuBtn && menuList) {
  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
    menuList.classList.toggle('flex');
    menuList.classList.toggle('flex-col');
    menuList.classList.toggle('absolute');
    menuList.classList.toggle('top-16');
    menuList.classList.toggle('left-0');
    menuList.classList.toggle('w-full');
    menuList.classList.toggle('bg-surface');
    menuList.classList.toggle('p-4');
    menuList.classList.toggle('border-b');
    menuList.classList.toggle('border-line');
  });
}