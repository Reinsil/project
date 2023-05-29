// Burger menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');
let menuLinks = menu.querySelectorAll('.nav__item');
let nav = document.querySelector('.header-bottom__nav');
let headerTop = document.querySelector('.header__top');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
  nav.classList.toggle('header-bottom__nav--active');
  headerTop.classList.toggle('header__top--active');
});

menuLinks.forEach(function (el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
        headerTop.classList.remove('header__top--active');
        nav.classList.remove('header-bottom__nav--active');
    })
});

const anchors = document.querySelectorAll('.nav__link')
      for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const blockID = anchor.getAttribute('href').substr(1)
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }

// Login

let loginBtn = document.querySelector('.login-btn');
let loginForm = document.querySelector('.login');
let closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', function() {
  loginForm.classList.toggle('login--visible');
  document.body.classList.toggle('stop-scroll');
})

closeBtn.addEventListener('click', function() {
  loginForm.classList.remove('login--visible');
  document.body.classList.remove('stop-scroll');
})

// Search

let searchBtn = document.querySelector('.search-btn');
let searchBox = document.querySelector('.search-wrapper');
let searchPosition = document.querySelector('.header__nav');

searchBtn.addEventListener('click', function() {
  searchBox.classList.toggle('search--open');
  searchPosition.classList.toggle('search-pos');
})

// Header broadcasts mobile

let broadcastsMobBtn = document.querySelector('.header-bottom__broadcasts');
let headerBottom = document.querySelector('.header__bottom');
let player = document.querySelector('.player');

broadcastsMobBtn.addEventListener('click', function() {
  player.classList.toggle('player--active');
  headerBottom.classList.toggle('header__bottom--active');
})

// btn show more

let showMore = document.querySelector('.podcasts__btn');
let podcastCard = document.querySelectorAll('.podcast');

showMore.addEventListener('click', function() {
  for (let i = 0; i < podcastCard.length; i++) {
    podcastCard[i].classList.toggle("podcast-visible");
  };
  showMore.innerHTML = (showMore.innerHTML === 'Скрыть') ? showMore.innerHTML = 'Показать ещё' : showMore.innerHTML = 'Скрыть';
})

// Select

const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});

// Accordion

new Accordion('.accordion', {
    elementClass: 'accordion__item',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
});

// Guests


let tabsBtn = document.querySelectorAll('.accordion__guest-name');
let tabsItem = document.querySelectorAll('.guest__content');
let initial = document.querySelectorAll('.guest__initial');

tabsBtn.forEach(function(el) {
    el.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsItem.forEach(function(el){el.classList.remove('tab-content--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
    });
}); 

// Swiper

let swiper = new Swiper('.swiper__container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    a11y: {
        containerMessage: 'Слайдер',
        firstSlideMessage: 'Первый слайд',
        navigationBulletMessage: 'Перейти к слайду {{index}}'
      },

      breakpoints: {

        320: {
          slidesPerView: 2,
          spaceBetween: 12,
        },

        567: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 4,
        },

        
      }
  });


// Play btns

   document.querySelector('.play-btn').addEventListener('click', function () {
    document.querySelector('.play-btn .pause-icon').classList.toggle('icon-disable');
  });
  
  document.querySelector('.play-btn-now').addEventListener('click', function () {
    document.querySelector('.play-btn-now .pause-icon').classList.toggle('icon-disable');
  });

// Buttons

let btnPlay = document.querySelectorAll('.podcast__play');
        btnPlay.forEach(function(el) {
          el.addEventListener('click', function(ev) {
            ev.stopPropagation();
              btnPlay.forEach(el => { if (el != this) { el.classList.remove('icon-disable') 
            }; 
            });
                this.classList.toggle('icon-disable');
        });
      });

// Validate

const validation = new JustValidate('.about__form-wrapper');

validation.addField('#user-massage', [ {
  validator: e=>void 0 !== e && e.length > 3,
  errorMessage: "Сообщение должно содержать более 3 символов"
}
]),

validation.addField('#user-agree', [ {
  rule: "required",
  errorMessage: "Примите соглашение"
}
]),

validation.addField('#name', [ {
  rule: 'required',
  errorMessage: "Вы не ввели имя"
  },
  {
  rule: 'minLength',
  value: 2,
  errorMessage: "Недостаточное количество символов"
  }
  ]), 

validation.addField('#email', [ {
  rule: 'required',
  errorMessage: "Вы не ввели e-mail"
  },
  {
  rule: 'email',
  errorMessage: "Неверный формат"
  }
  ])

  const loginValidation = new JustValidate('.login__form');

  loginValidation.addField('#login', [ {
    rule: "required",
    errorMessage: "Неверный логин"
  }
  ]),

  loginValidation.addField('#password', [ {
    rule: "required",
    errorMessage: "Неверный пароль"
  }
  ])
















