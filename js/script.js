let current = 0;

const img = document.querySelector('.js-img');
const username = document.querySelector('.js-name');
const userStatus = document.querySelector('.js-status');
const bloclquote = document.querySelector('.js-bloclquote');
const btns = document.querySelectorAll('.js-btn');

const [prev, next] = btns;

const data = [
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

const setUserData = function () {
  const currData = data[current];

  img.src = currData.img;
  //   img.classList.add('is-visible');
  bloclquote.textContent = currData.bloclquote;
  username.textContent = currData.username;
  userStatus.textContent = currData.status;

  //   if (img.classList.contains('is-visible')) {
  //     img.classList.remove('is-visible');
  //   } else {
  //     img.classList.add('is-visible');
  //   }

  //   setTimeout(() => img.classList.remove('is-visible'), 500);

  current === 0 ? current++ : current--;
};

[prev, next].forEach((btn) =>
  btn.addEventListener('click', () => {
    setUserData();
  })
);

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') setUserData();
});
