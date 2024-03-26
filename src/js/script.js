let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".header__navbar");
menuIcon.onclick=()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => { 
    sections.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop - 150;
      let height=sec.offsetHeight;
      let id =sec.getAttribute('id');
      if(top>=offset && top<offset+height){
        navLinks.forEach(links=>{
          links.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
      }
    });
    let header=document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let DarkModeIcon=document.querySelector('#darkMode-icon');
  DarkModeIcon.onclick=()=>{
    DarkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };

  ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
  });
  ScrollReveal().reveal('.home__content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home__img img, .services__container, .portafolio__container__box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home__content__nombre, .about__img img', { origin: 'left' });
  ScrollReveal().reveal('.home__content__titulo, .home__content__parrafo, .about__content', { origin: 'right' });