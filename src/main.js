(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeMenuBtns: document.querySelectorAll('[data-menu-close]'),
    // Додати атрибут data-menu на меню
    menu: document.querySelector('[data-menu]'),
  };

  if (refs.openMenuBtn) refs.openMenuBtn.addEventListener('click', toggleMenu);
  if (refs.closeMenuBtns.length)
    refs.closeMenuBtns.forEach(btn => {
      btn.addEventListener('click', toggleMenu);
    });

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися
    if (refs.menu.classList) refs.menu.classList.toggle('is-open');
  }
})();
