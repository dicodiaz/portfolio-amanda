export default class Portfolio {
  constructor({ pictures = [] } = {}) {
    this.pictures = pictures;
  }

  addPicture = (picture) => {
    this.pictures.push(picture);
    return this;
  };

  addAllPictures = (pictures) => {
    pictures.forEach((picture) => this.addPicture(picture));
    return this;
  };

  appendPicture = (picture, container, x = -1, y = -1) => {
    const img = document.createElement('img');
    img.src = picture;
    img.alt = picture;
    img.classList.add('p-1', 'img-fluid');
    if (x !== -1 && y !== -1) {
      img.classList.add('w-50', 'position-absolute');
      img.style = `top: ${y}px; left: ${x}px`;
      img.dataset.toggle = 'modal';
      img.dataset.target = '#modal';
    }
    container.appendChild(img);
    return new Promise((resolve) => (img.onload = resolve));
  };

  appendAllPictures = async (container) => {
    container.classList.add('position-relative');
    const width = container.offsetWidth,
      seeMoreContainer = document.createElement('div');
    let yCol1 = 0,
      yCol2 = 0,
      relevantContainer = container;
    for (let i = 0; i < this.pictures.length; i++) {
      if (i === 4) {
        seeMoreContainer.id = 'collapsable';
        container.appendChild(seeMoreContainer);
        relevantContainer = seeMoreContainer;
        this.collapsedHeight = yCol2;
      }
      if (i % 2 === 0) {
        await this.appendPicture(this.pictures[i], relevantContainer, 0, yCol1);
        yCol1 += container.querySelectorAll('img')[i].offsetHeight;
      } else {
        await this.appendPicture(this.pictures[i], relevantContainer, width / 2, yCol2);
        yCol2 += container.querySelectorAll('img')[i].offsetHeight;
      }
    }
    seeMoreContainer.classList.add('collapse');
    this.fullHeight = Math.max(yCol1, yCol2);
    container.style.height = this.collapsedHeight + 'px';
    return this;
  };

  delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
}
