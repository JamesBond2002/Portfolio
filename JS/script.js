let leftSide = [
  document.querySelector('#left-side'),
  document.querySelector('.intro-text')
];
let rightSide = [
  document.querySelector('#right-side'),
  document.querySelector('.intro-img')
];

let amount = window.pageYOffset / window.innerHeight;
amount *= window.innerWidth;
leftSide.forEach(x => {
  x.style.left = -amount + 'px';
});
rightSide[0].style.left = amount + 'px';
rightSide[1].style.left = (window.innerWidth/2 + amount) + 'px';

let scrollApear = (t) => {
  let element = document.querySelector(t);
  if(element.getBoundingClientRect().top 
    < window.innerHeight/1.5)
  {
    element.style.opacity = 1;
    element.style.transform = `translateX(0)`;
  }
};

scrollApear('.project1 .box');
scrollApear('.project2 .box');
scrollApear('.project3 .box');
scrollApear('#about-project1');
scrollApear('#about-project2');
scrollApear('#about-project3');

window.addEventListener('scroll', () => {
  let amount = window.pageYOffset / window.innerHeight;
  amount *= window.innerWidth;
  leftSide.forEach(x => {
    x.style.left = -amount + 'px';
  });
  rightSide[0].style.left = amount + 'px';
  rightSide[1].style.left = (window.innerWidth/2 + amount) + 'px';
});

window.addEventListener('load', () => {
  let pl = document.querySelector('.preloader');
  pl.classList.add('preload-finish');
});

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

let hb = document.querySelector('.hamburger'); 
let navLinks = document.querySelector('.nav-links');

introText.style.opacity = 1;
introText.style.transform = 'translateY(0)';

setTimeout(() => {
  introText.style.transition = 'all 0.5s ease-out';
  introText.style.opacity = 0;
  introText.style.transform = 'translateY(2rem)';
  // console.log(1);
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

let container = document.querySelectorAll('.container'), 
box = document.querySelectorAll('.box');

for(let i = 0; i<3; i++) {
  container[i].addEventListener('mousemove', (e) => {
    let rect = container[i].getBoundingClientRect(), 
    x = e.clientX - rect.left, y = e.clientY - rect.top;
    let xPos = ((rect.right-rect.left)/2 - x)/25;
    let yPos = ((rect.bottom - rect.top)/2 - y)/25;
    // console.log(xPos, yPos);
    box[i].style.transform = `rotateX(${yPos}deg) rotateY(${-xPos}deg)`;
  });
  container[i].addEventListener('mouseenter', () => {
    box[i].style.transition = 'none';
  });
  container[i].addEventListener('mouseleave', () => {
    box[i].style.transition = 'all .5s ease';
    box[i].style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
};

hb.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

let navs = document.querySelectorAll('.navs');

navs[0].addEventListener('click', () => {
  window.scrollTo(0, 0);
  navLinks.classList.toggle('open');
})

for(let i = 1; i<4; i++) {
  navs[i].addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

window.addEventListener('scroll', () => {
  scrollApear('.project1 .box');
  scrollApear('.project2 .box');
  scrollApear('.project3 .box');
  scrollApear('#about-project1');
  scrollApear('#about-project2');
  scrollApear('#about-project3');
});

let videos = document.querySelectorAll('video');
// let entered = [false, false, false]

for(let i = 0; i<2; i++)
{
  videos[i].addEventListener('mouseenter', () => {
    videos[i].play();
  });
  videos[i].addEventListener('mouseleave', () => {
    videos[i].pause();
  });
}