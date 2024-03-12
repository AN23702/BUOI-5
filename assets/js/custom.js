$(document).ready(function(){
    // $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
      loop:true, /*Vong lap*/
      margin:10, /*Khoang cach giua cac item*/
      nav:true, /*Thanh dieu huong, hai mui ten*/
      dots:true,/*Dau cham dieu huong*/
      autoplay: true, /*Tu dong chuyen slide*/
      autoplayTimeout: 4000,

      responsive:{ /*Quy dinh so luong san pham tren cac man hinh*/

          0:{ 
              items:1 /*0->599px thi hien 1 san pham*/
          },
          600:{
              items:1 /*601->999px thi hien 3 san pham*/
          },
          1000:{
              items:1
          }
      }
  })

  });

