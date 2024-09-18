
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
    ? window.location.href = 'index.html'
    :  window.location.href = 'index.html';
    
  })

  user.addEventListener('click',()=>{
    
    const userAgent = navigator.userAgent.toLowerCase();
   
    /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? window.location.href = 'login.html'
      :  window.location.href = 'login.html';
      
    })

