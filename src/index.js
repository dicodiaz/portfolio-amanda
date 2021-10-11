import Portfolio from './Portfolio.js';
import './style.css';

const portfolio = new Portfolio();
const crossFading = document.querySelectorAll('.cross-fading');
const navbarToggler = document.querySelector('.navbar-toggler');
const menuItems = document.querySelectorAll('#menu > a');
const pictureList = document.querySelector('#picture-list');
const carouselItems = document.querySelectorAll('.carousel-item');

window.onload = () => {
  const importAll = (r) =>
    r
      .keys()
      .sort((a, b) => Number(a.replace(/\D+/g, '')) - Number(b.replace(/\D+/g, '')))
      .map(r);
  const pictures = importAll(require.context('./img/portfolio', false, /\.(png|jpe?g|svg)$/));
  portfolio.addAllPictures(pictures).appendAllPictures(pictureList);

  crossFading.forEach((element) => {
    element.addEventListener('click', () => {
      [...element.children].forEach((child) => {
        child.classList.toggle('opacity-0');
      });
    });
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      navbarToggler.click();
      navbarToggler.firstChild.click();
    });
  });

  carouselItems.forEach((carouselItem, i) => {
    portfolio.appendPicture(portfolio.pictures[i + 2], carouselItem);
  });
};
