document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('a.card');
  var background = document.querySelector('.background');

  // Store the index of the last hovered card
  var lastHoveredCardIndex = localStorage.getItem('lastHoveredCardIndex') || 0;

  // Set the background to the last hovered card by default
  var cardRect = cards[lastHoveredCardIndex].getBoundingClientRect();
  var x = cardRect.left + window.scrollX + cardRect.width / 2;
  var y = cardRect.top + window.scrollY + cardRect.height / 2;

  background.style.width = cardRect.width + 'px';
  background.style.height = cardRect.height + 'px';
  background.style.transform = translate(${x - cardRect.width / 2}px, ${
    y - cardRect.height / 2
  }px);
  background.style.opacity = '0'; // Set opacity to 0 when the page loads

  cards.forEach(function (card, index) {
    card.addEventListener('mouseenter', function (e) {
      // If the card is zoomed in, return early to prevent the hover effect
      if (card.classList.contains('zoomed')) {
        return;
      }

      var rect = card.getBoundingClientRect();
      x = rect.left + window.scrollX + rect.width / 2;
      y = rect.top + window.scrollY + rect.height / 2;

      background.style.width = rect.width + 'px';
      background.style.height = rect.height + 'px';
      background.style.transform = translate(${x - rect.width / 2}px, ${
        y - rect.height / 2
      }px);
      background.style.opacity = '1'; // Change opacity to 1 when a card is hovered over
      background.style.top = '0%';
      background.style.left = '0%';
      background.style.transformOrigin = 'center';
      // Store the index of the hovered card
      localStorage.setItem('lastHoveredCardIndex', index);
    });

    card.addEventListener('mouseleave', function (e) {
      background.style.opacity = '0'; // Change opacity back to 0 when the mouse leaves a card
      // Reset the background size when the mouse leaves the card
      background.style.width = '0px';
      background.style.height = '0px';
    });

    card.addEventListener('click', function () {
      if (card.classList.contains('zoomed')) {
        card.classList.remove('zoomed');
        card.style.transform = 'none';
        card.style.position = 'relative';
        card.style.width = 'unset';
        card.style.height = 'unset';
        card.style.top = '0';
        card.style.left = '0';
        card.style.zIndex = '0';

        // Remove the 'overflow' class from the body when a card is unzoomed
        document.body.classList.remove('overflow');

        // Remove the 'opacity-0' class from other <a> tags when a card is unzoomed
        cards.forEach(function (otherCard) {
          if (otherCard !== card) {
            otherCard.classList.remove('opacity-0');
          }
        });
      } else {
        card.classList.add('zoomed');
        card.style.position = 'fixed';
        card.style.top = '50%';
        card.style.left = '50%';
        requestAnimationFrame(function () {
          card.style.transform = 'translate(-50%, -50%)';
        });
        card.style.width = '90vw';
        card.style.height = '90vh';
        card.style.zIndex = '1000';

        // Add the 'overflow' class to the body when a card is zoomed
        document.body.classList.add('overflow');

        // Add the 'opacity-0' class to other <a> tags when a card is zoomed
        cards.forEach(function (otherCard) {
          if (otherCard !== card) {
            otherCard.classList.add('opacity-0');
          }
        });
      }
    });
  });
});

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

function openReiseplan() {
  window.open('reiseplan.html', '_blank');
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

POISK
function searchQuestions() {
  const input = document
    .getElementById('searchInput')
    .value.toLowerCase();
  const questionBlocks = document.querySelectorAll('.question-block');

  questionBlocks.forEach((block) => {
    const question = block
      .querySelector('.question')
      .textContent.toLowerCase();
    const answers = Array.from(block.querySelectorAll('.answer')).map(
      (a) => a.textContent.toLowerCase()
    );
    const combinedText = [question, ...answers].join(' ');

    if (combinedText.includes(input)) {
      block.classList.remove('hidden');
    } else {
      block.classList.add('hidden');
    }
  });
}

function checkPassword() {
  const enteredPassword = document.getElementById('password').value;
  const correctPassword = 'pfetten98'; // Задай свое пароль здесь

  if (enteredPassword === correctPassword) {
    document.getElementById('passwordPrompt').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    alert('Falsches Passwort. Bitte erneut versuchen.');
  }
}

window.onload = function () {
  document.querySelectorAll('img').forEach(function (img) {
    if (img.naturalHeight > img.naturalWidth) {
      img.classList.add('vertical'); // Добавляем класс, если изображение вертикальное
    }
  });
};

