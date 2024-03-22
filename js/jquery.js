$(document).ready(function(){


    // const headerEl = document.querySelector('header');
    // const secEl = document.querySelector('.section_2');

    // const scrollHandler = () => {
    //     const pageY = window.pageYOffset;
    //     const secElTop = secEl.offsetTop;

    //     if(pageY > secElTop){
    //         headerEl.style.backgroundColor = '#fff';
    //     }else{
    //         headerEl.style.backgroundColor = '#efefef';
    //     }
    // }

    // window.addEventListener('scroll', scrollHandler);


    // var i = 0;
    
    // $('.btn_right').click(function(){

    //     i++;
        
    //     if(i > 4) {
    //         i = 0
    //     }

    //     $('.sec7_wrap').animate({
    //         left: -485 * i
    //     });




    // });

    // $('.btn_left').click(function(){
    //     i--;

    //     if(i < 0) {
    //         i = 4;
    //     }
    //     console.log(i);

    //     $('.sec7_wrap').animate({
    //         left: -485 * i
    //     });
    // });

    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

});