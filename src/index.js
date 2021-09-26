import Close from './img/close-white.png';
import Instagram from './img/instagram-white.png';
import Menu from './img/menu-white.png';
import TikTok from './img/tik-tok-white.png';
import './style.css';

const appendImg = (source, container) => {
  const div = document.createElement('div');
  div.classList.add('d-flex', 'justify-content-end', 'align-items-center');
  const img = document.createElement('img');
  img.src = source;
  img.alt = container.id;
  img.classList.add('img-fluid');
  div.appendChild(img);
  container.appendChild(div);
};

const appendCrossFadingImgs = (botSource, topSource, container) => {
  const div = document.createElement('div');
  div.classList.add('d-flex', 'justify-content-end', 'align-items-center');
  const botImg = document.createElement('img');
  botImg.src = botSource;
  botImg.alt = `${container.id}-bot`;
  botImg.classList.add('img-fluid', 'transition-opacity');
  const topImg = document.createElement('img');
  topImg.src = topSource;
  topImg.alt = `${container.id}-top`;
  topImg.classList.add(
    'img-fluid',
    'transition-opacity',
    'opacity-0',
    'position-absolute',
    'top-50',
    'start-50',
    'translate-middle',
  );
  div.appendChild(botImg);
  div.appendChild(topImg);
  container.appendChild(div);
  container.classList.add('position-relative');
};

const iconInstagram = document.querySelector('#icon-instagram');
const iconTikTok = document.querySelector('#icon-tiktok');
const menuContainer = document.querySelector('#menu-container');
const menuItems = document.querySelectorAll('#menu > a');

appendImg(Instagram, iconInstagram);
appendImg(TikTok, iconTikTok);
appendCrossFadingImgs(Menu, Close, menuContainer);

menuContainer.addEventListener('click', () => {
  menuContainer.firstChild.childNodes.forEach((child) => {
    child.classList.toggle('opacity-0');
  });
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuContainer.click();
  });
});
