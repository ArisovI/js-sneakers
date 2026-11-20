const burger = document.querySelector('burger');

// создаём меню
const menu = document.createElement('div');
menu.style.cssText = 
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background: white;
  transform: translateX(100%);
  transition: 0.3s;
;

// содержимое
menu.innerHTML = 
  <button class="close">✕</button>
  <a href="#">About</a>
  <a href="#">Work</a>
  <a href="#">Testimonials</a>
  <a href="#">Contact</a>
  <button>Download CV</button>
;

document.body.append(menu);

// открыть
burger.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
});

// закрыть
menu.querySelector('.close').addEventListener('click', () => {
  menu.style.transform = 'translateX(100%)';
});