import Close from './img/close-white.png';
import Instagram from './img/instagram-white.png';
import Menu from './img/menu-white.png';
import picture1 from './img/picture (1).jpeg';
import picture10 from './img/picture (10).jpeg';
import picture11 from './img/picture (11).jpeg';
import picture12 from './img/picture (12).jpeg';
import picture2 from './img/picture (2).jpeg';
import picture3 from './img/picture (3).jpeg';
import picture4 from './img/picture (4).jpeg';
import picture5 from './img/picture (5).jpeg';
import picture6 from './img/picture (6).jpeg';
import picture7 from './img/picture (7).jpeg';
import picture8 from './img/picture (8).jpeg';
import picture9 from './img/picture (9).jpeg';
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
const picturesContainer = document.querySelector('#pictures');

appendImg(Instagram, iconInstagram);
appendImg(TikTok, iconTikTok);
appendCrossFadingImgs(Menu, Close, menuContainer);
appendImg(picture1, picturesContainer);
appendImg(picture2, picturesContainer);
appendImg(picture3, picturesContainer);
appendImg(picture4, picturesContainer);
appendImg(picture5, picturesContainer);
appendImg(picture6, picturesContainer);
appendImg(picture7, picturesContainer);
appendImg(picture8, picturesContainer);
appendImg(picture9, picturesContainer);
appendImg(picture10, picturesContainer);
appendImg(picture11, picturesContainer);
appendImg(picture12, picturesContainer);

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
