

const shopText = document.querySelectorAll('.shop');

for (let i = 0; i < shopText.length; i++) {
  shopText[i].innerHTML =
    'Wir planen Ihre Foto-Reise, Sie halten die schönsten Momente fest!';
}

const burgerMenu = document.querySelector('.burger-menu');
const nlist = document.querySelector('.nlist');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  nlist.classList.toggle('open'); // Добавляем/убираем класс для меню
});

var navbar = document.getElementById('navbar');

// Добавляем событие на прокрутку страницы
window.onscroll = function () {
  stickyNavbar();
};

// Функция, которая управляет фиксированием навбара
function stickyNavbar() {
  if (window.pageYOffset >= 200) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}
const currentLocation = window.location.pathname;
const menuItems = document.querySelectorAll('.nlist li a');

menuItems.forEach((item) => {
  if (item.getAttribute('href') === currentLocation) {
    item.classList.add('active');
  }
});
const currentPage = window.location.pathname.split('/').pop();
const menuLinks = document.querySelectorAll('.nlist a');

// Проверяем и активируем нужную ссылку
menuLinks.forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var currentPath = window.location.pathname.split('/').pop(); // Получаем последний элемент пути URL
  var menuLinks = document.querySelectorAll('.nav-link');

  menuLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = translateX(-${currentSlide * 100}%);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}


function setActive(element) {
  // Удаляем класс 'active' у всех кнопок
  const buttons = document.querySelectorAll('.nlist li a');
  buttons.forEach(function (button) {
    button.classList.remove('active');
  });

  // Добавляем класс 'active' на нажатую кнопку
  element.classList.add('active');
}

