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
let botonmeraki=document.querySelector('.botonmeraki');
let completomeraki=document.querySelector('.completo-meraki');
botonmeraki.onclick=()=>{
  completomeraki.classList.toggle('activo');
  if(botonmeraki.innerHTML=='Leer Menos'){
    botonmeraki.innerHTML="Leer Mas";
  }
  else{
    botonmeraki.innerHTML="Leer Menos";
  }
  
}
let botoneduavi=document.querySelector('.botoneduavi');
let completoeduavi=document.querySelector('.completo-eduavi');
botoneduavi.onclick=()=>{
  completoeduavi.classList.toggle('activo');
  if(botoneduavi.innerHTML=='Leer Menos'){
    botoneduavi.innerHTML="Leer Mas";
  }
  else{
    botoneduavi.innerHTML="Leer Menos";
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
var swiper2 = new Swiper(".mySwiper2", {
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

  document.getElementById("MensajeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener los valores de los campos
    var phoneNumber = '59167386760';
    var nombre = document.getElementById("descripcion").value;
    var message = document.getElementById("nombre").value;
    var clientEmail = document.getElementById("email").value;
    
    // Formatear el número de teléfono para la API de WhatsApp (removiendo caracteres especiales)
    phoneNumber = phoneNumber.replace(/\D/g, '');
    
    // URL de la API de WhatsApp
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
    // Construir el cuerpo del correo electrónico
    var emailBody = "Mi Nombre es: " + nombre + "\n\n" + "Mensaje: " + message + "\n\n" + "Correo electrónico del cliente: " + clientEmail;
    
    // Codificar el cuerpo del correo electrónico para incluir saltos de línea
    emailBody = encodeURIComponent(emailBody).replace(/%0A/g, "%0D%0A");
    
    // URL del servicio de correo electrónico (enviado a tu correo)
    var emailURL = "mailto:fridel@gmail.com?subject=Mensaje desde la Pagina Web=" + emailBody;
    
    // Determinar qué botón se ha presionado
    var submitType = event.submitter.name;
    
    if (submitType === "whastappButton") {
      // Abrir una nueva ventana para enviar el mensaje por WhatsApp
      window.open(whatsappURL);
    } else if (submitType === "correoButton") {
      // Redirigir al usuario a su cliente de correo electrónico con el mensaje preparado
      window.location.href = emailURL;
    }
  });
  
  function abrirModal() {
    // Ruta al archivo PDF (reemplaza con tu propia ruta)
    const pdfUrl = 'src/doc/Edu-CV.pdf';

    // Muestra el modal
    document.getElementById('pdfModal').style.display = 'block';

    // Establece la URL del <iframe>
    document.getElementById('pdfIframe').src = pdfUrl;
}

function cerrarModal() {
    // Oculta el modal
    document.getElementById('pdfModal').style.display = 'none';

    // Detiene la reproducción del PDF
    document.getElementById('pdfIframe').src = '';
}