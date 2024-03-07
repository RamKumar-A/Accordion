'use strict';

const accordion = document.querySelectorAll('.accordion');

accordion.forEach((el, index1) => {
  let header = el.querySelector('.accordion__header');
  let content = el.querySelector('.accordion__content');
  header.addEventListener('click', function () {
    el.classList.toggle('open__content');
    if (el.classList.contains('open__content')) {
      content.style.height = '100%';
      header.querySelector('span').textContent = '-';
    } else {
      content.style.height = '0px';
      header.querySelector('span').textContent = '+';
    }
    removeOpenedContent(index1);
  });
});

function removeOpenedContent(index1) {
  accordion.forEach((el, index2) => {
    let header = el.querySelector('.accordion__header');
    let content = el.querySelector('.accordion__content');
    if (index2 !== index1) {
      el.classList.remove('open__content');
      content.style.height = '0px';
      header.querySelector('span').textContent = '+';
      // content.style.display = 'none';
    }
  });
}
