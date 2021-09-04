import '../scss/style.scss';
import gsap from 'gsap';

const section = document.querySelectorAll('.description__tool');
const landing = document.querySelector('.app__header');
const description = document.querySelector('.app__description');
const tl = gsap.timeline({ paused: true });

const desktopAnimation = () => {
  tl.to(landing, {
    duration: 0.25,
    scale: 1.03,
  }).to(
    description,
    {
      duration: 0.25,
      scale: 1.03,
    },
    '-=0.25',
  );
  tl.to(landing, { y: '150vh' }).to(description, { y: '-150vh' }, '-=0.85');
  tl.to('input', { opacity: 1 }, '-=0.5');
  tl.to(
    'object',
    {
      zIndex: 0,
      opacity: 1,
    },
    '-=0.75',
  );
};
const mobileAnimation = () => {
  tl.to(landing, {
    duration: 0.25,
    scale: 1.03,
  }).to(
    description,
    {
      duration: 0.25,
      scale: 1.03,
    },
    '-=0.25',
  );
  tl.to(landing, { x: '150vw' }).to(description, { x: '-150vw' }, '-=0.85');
  tl.to('input', { opacity: 1 }, '-=0.5');
  tl.to(
    'object',
    {
      zIndex: 0,
      opacity: 1,
    },
    '-=0.75',
  );
};
const gsapAnimation = () => {
  gsap.defaults({
    ease: 'power2.inOut',
    duration: 0.85,
  });
  if (window.innerWidth <= 1000) {
    mobileAnimation();
  } else {
    desktopAnimation();
  }
};
gsapAnimation();

let currentX = null;

section.forEach((el) => {
  el.addEventListener('click', () => {
    currentX = el.offsetTop;
    document.querySelector('object').data = el.dataset.link;
    tl.play(!tl.play());
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  });
});

document.querySelector('input').addEventListener('click', () => {
  window.scrollTo(0, currentX);
  tl.reversed(!tl.reversed());
});

window.addEventListener('keydown', (keyVal) => {
  if (keyVal.key === 'Escape') {
    tl.reversed(!tl.reversed());
  }
});
