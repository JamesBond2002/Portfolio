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

