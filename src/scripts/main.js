'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

function changeLargeImg(e) {
  if (!(e instanceof Event)) {
    return;
  }

  e.preventDefault();

  const target = e.target;
  let source = '';

  if (target.matches('.list-item__link')) {
    source = target.href;
  } else if (target.matches('.gallery__thumb')) {
    source = target.parentElement.href;
  }

  largeImg.setAttribute('src', source);
}

thumbs.addEventListener('click', changeLargeImg);
