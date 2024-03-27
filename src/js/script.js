let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".header__navbar");
menuIcon.onclick=()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

let botonabout=document.querySelector('.botonabout');
let completo=document.querySelector('.completo');
botonabout.onclick=()=>{
  completo.classList.toggle('activo');
  if(botonabout.innerHTML=='Leer Menos'){
    botonabout.innerHTML="Leer Mas";
  }
  else{
    botonabout.innerHTML="Leer Menos";
  }
  
}

let botonsoftware=document.querySelector('.botonsoftware');
let completosoftware=document.querySelector('.completo-software');
let iconossoftware=document.querySelector('.iconos-software');
botonsoftware.onclick=()=>{
  completosoftware.classList.toggle('activo');
  iconossoftware.classList.toggle('activo');
  if(botonsoftware.innerHTML=='Leer Menos'){
    botonsoftware.innerHTML="Leer Mas";
  }
  else{
    botonsoftware.innerHTML="Leer Menos";
  }
  
}
let botonase=document.querySelector('.botonase');
let completoase=document.querySelector('.completo-ase');
botonase.onclick=()=>{
  completoase.classList.toggle('activo');
  if(botonase.innerHTML=='Leer Menos'){
    botonase.innerHTML="Leer Mas";
  }
  else{
    botonase.innerHTML="Leer Menos";
  }
  
}
let botonwo=document.querySelector('.botonwo');
let completowo=document.querySelector('.completo-wo');
botonwo.onclick=()=>{
  completowo.classList.toggle('activo');
  if(botonwo.innerHTML=='Leer Menos'){
    botonwo.innerHTML="Leer Mas";
  }
  else{
    botonwo.innerHTML="Leer Menos";
  }
  
}
let botonca=document.querySelector('.botonca');
let completoca=document.querySelector('.completo-ca');
botonca.onclick=()=>{
  completoca.classList.toggle('activo');
  if(botonca.innerHTML=='Leer Menos'){
    botonca.innerHTML="Leer Mas";
  }
  else{
    botonca.innerHTML="Leer Menos";
  }
  
}
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
  var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
      centeredSlides: true,
      parallax: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
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