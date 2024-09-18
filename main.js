// // landing
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// // landing

const burger = document.querySelector(".burger");
// const cs = window.getComputedStyle(font);
// const fontSize = cs.fontSize;
// console.log(fontSize); 

// console.log(window.getComputedStyle(font).fontSize);

// const full = document.querySelector(".full")
// console.log(window.getComputedStyle(full).fontSize);

const full = document.querySelector(".full")

burger.addEventListener('click',()=>{
  full.classList.toggle('unhide')
})


const logo = document.querySelector('.logo');

const user = document.querySelector('.user');

logo.addEventListener('click',()=>{
  
  const userAgent = navigator.userAgent.toLowerCase();
 
  /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? window.location.href = 'http://192.168.1.2:5500/index.html'
    :  window.location.href = 'http://127.0.0.1:5500/index.html';
    
  })

  user.addEventListener('click',()=>{
    
    const userAgent = navigator.userAgent.toLowerCase();
   
    /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? window.location.href = 'http://192.168.1.2:5500/login.html'
      :  window.location.href = 'http://127.0.0.1:5500/login.html';
      
    })



