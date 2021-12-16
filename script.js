var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    effect: "fade",
    autoplay:true,
    loop : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// - loader script
let preload = document.getElementById('loading');
function myfun(){
  preload.style.display="none";
}
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})