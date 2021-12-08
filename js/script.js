let current = 0;

const img = document.querySelector('.js-img');
const username = document.querySelector('.js-name');
const userStatus = document.querySelector('.js-status');
const bloclquote = document.querySelector('.js-bloclquote');
const wrapperBtns = document.querySelector('.js-wrapper-btns');
const wrapperInfo = document.querySelector('.js-wrapper-info');
const btns = document.querySelectorAll('.js-btn');

const [prev, next] = btns;

const usersData = [
  {
    img: './images/image-john.jpg',
    bloclquote: `“ If you want to lay the best foundation possible I’d recommend taking this
        course. The depth the instructors go into is incredible. I now feel so
        confident about starting up as a professional developer. ”`,
    username: 'John Tarkpor',
    status: 'Junior Front-end Developer',
  },
  {
    img: './images/image-tanya.jpg',
    bloclquote: `“ I’ve been interested in coding for a while but never taken the
    jump, until now. I couldn’t recommend this course enough. I’m now in
    the job of my dreams and so excited about the future. ”`,
    username: 'Tanya Sinclair',
    status: 'UX Engineer',
  },
];

// Helper functions
const classAdder = (...items) =>
  items.forEach((item) => item.classList.add('is-visible'));
const classRemover = (...items) =>
  items.forEach((item) => item.classList.remove('is-visible'));

const setAnimations = function () {
  const items = [
    img,
    bloclquote,
    username,
    userStatus,
    wrapperBtns,
    wrapperInfo,
  ];

  classRemover(...items);
  setTimeout(() => classAdder(img, wrapperBtns), 500);
  setTimeout(() => classAdder(bloclquote, wrapperInfo), 800);
};

// Event callbacks
const setUserData = function () {
  const currentData = usersData[current];

  img.src = currentData.img;
  bloclquote.textContent = currentData.bloclquote;
  username.textContent = currentData.username;
  userStatus.textContent = currentData.status;

  setAnimations();

  current === 0 ? current++ : current--;
};

const moveWithArrows = function (e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') setUserData();
};

// Events
[(prev, next)].forEach((btn) => btn.addEventListener('click', setUserData));
window.addEventListener('keydown', moveWithArrows);
