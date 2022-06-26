$(document).ready(function(){

     $("#email_wrap1").click(function(){
          $('.mainEmail1').focus();
          $('.email_text1').animate({top : 10, "font-size" : "10px"} ,120);
          return false;
     });

     $(window).click(function(){
          if($(".mainEmail1").val() == "") 
          $(".email_text1").animate({top : 25, "font-size" : "16px"} ,120);
     })

     $("#email_wrap2").click(function(){
          $('.mainEmail2').focus();
          $('.email_text2').animate({top : 10, "font-size" : "10px"} ,120);
          return false;
     });

     $(window).click(function(){
          if($(".mainEmail2").val() == "") 
          $(".email_text2").animate({top : 25, "font-size" : "16px"} ,120);
     })


     $('.accordion .title').click(function(){
          $(this).siblings('.accordion .content').stop().slideUp();
          $(this).next().stop().slideToggle('fast');
          $(this).siblings('.accordion .title').removeClass('active');
          $(this).toggleClass('active')
     });
})