var swiper = new Swiper(".mySwiper", {
   speed:2000 ,effect:"fade",
    spaceBetween: 0,
    loop :true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 1000,
      },
  });

  // mobile menu
 let mobileMenuIcon =document.querySelector('header .fa-bars')
 let menu =document.querySelector('header .menu')

 mobileMenuIcon.addEventListener('click',function(){
  menu.classList.toggle("open")
 })