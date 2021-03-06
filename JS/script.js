let fadeOut = (to, setText) => {
  to.style.opacity = 0;
  to.style.transform = 'translateY(2rem)';
  setTimeout(() => {
    to.innerHTML = setText;
    to.style.opacity = 1;
    to.style.transform = 'translateY(0)';
  }, 500);
};


let introText = document.querySelector('.intro-text').children[0];

introText.style.opacity = 1;
introText.style.transform = 'translateY(0)';

setTimeout(() => {
  introText.style.transition = 'all 0.5s ease-out';
  introText.style.opacity = 0;
  introText.style.transform = 'translateY(2rem)';
  console.log(1);
  setTimeout(() => {
        introText.innerHTML = `I am <span>Nishkarsh Arora</span>`;
        introText.style.transition = 'all 0.8s ease-out';
        introText.style.opacity = 1;
        introText.style.transform = 'translateY(0)';
        let iAm = introText.children[0];
        iAm.style.fontWeight = 600;
        iAm.style.color = '#2D93A9'
        iAm.style.transition = 'all 0.5s ease-out';
        setTimeout(() => {
          fadeOut(iAm, 'a Competitive Programmer');
          setTimeout(() => {
            fadeOut(iAm, 'a Software Developer');
          }, 2000);
        }, 1800)
        setInterval(() => {
          fadeOut(iAm, 'Nishkarsh Arora');
          setTimeout(() => {
            fadeOut(iAm, 'a Competitive Programmer');
          }, 2000);
          setTimeout(() => {
            fadeOut(iAm, 'a Software Developer');
          }, 4000);
        }, 6000);
  }, 500);
}, 1500);


let leftSide = [
  document.querySelector('#left-side'),
  document.querySelector('.intro-text')
];
let rightSide = [
  document.querySelector('#right-side'),
  document.querySelector('.intro-img')
];
window.addEventListener('scroll', () => {
  leftSide.forEach(x => {
    x.style.left = -window.pageYOffset + 'px';
  });
  rightSide.forEach(x => {
    x.style.right = -window.pageYOffset + 'px';
  });
  rightSide[0].style.left = window.pageYOffset + 'px';
  rightSide[1].style.left = (window.innerWidth/2 + window.pageYOffset) + 'px';
});

let container = document.querySelectorAll('.container'), 
box = document.querySelectorAll('.box');

for(let i = 0; i<3; i++) {
  container[i].addEventListener('mousemove', (e) => {
    let rect = container[i].getBoundingClientRect(), 
    x = e.clientX - rect.left, y = e.clientY - rect.top;
    // console.log(rect.left, rect.right);
    let xPos = ((rect.right-rect.left)/2 - x)/25;
    let yPos = ((rect.bottom - rect.top)/2 - y)/25;
    console.log(xPos, yPos);
    box[i].style.transform = `rotateX(${yPos}deg) rotateY(${-xPos}deg)`;
  });
  container[i].addEventListener('mouseenter', () => {
    box[i].style.transition = 'none';
  });
  container[i].addEventListener('mouseleave', () => {
    box[i].style.transition = 'all .5s ease';
    box[i].style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}