import '../scss/style.scss';
import gsap from 'gsap';

const section = document.querySelectorAll('.description__tool');
const landing = document.querySelector('.app__header');
const description = document.querySelector('.app__description');
const tl = gsap.timeline({ paused: true });

const units = 'vw';
const dir = 'x';

const animation = () => {
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
  tl.to(landing, { dir: `150${units}` }).to(description, { x: `-150${units}` }, '-=0.85');
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
  }
  animation();
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
