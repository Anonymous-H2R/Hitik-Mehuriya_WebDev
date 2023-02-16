// $document.ready(function()
// {
//     $('.').click(function()
//     {
//         $(this).toggleClass('');
//         $('navbar').toggleClass('nav-toggle')
//     });
// });
$(document).ready(function(){
    $(".fa-bars").click(function(){
      $(".fa-bars").toggleClass("fa-times");
      $(".navbar").toggleClass("nav-toggle");
    });

      $(window).on('scroll load',function(){
        if($(window).scrollTop()<25){
          $('.header').hide();
        }
        else
        {
          $('.header').show();
        }
        $(".fa-bars").removeClass("fa-times");
        $(".navbar").removeClass("nav-toggle");
      });
   
  });
  

 