$(document).ready(function(){

     $("#email_wrap").click(function(){
          $(".mainEmail").focus();
          $(".email_text").animate({top : 10, "font-size" : "10px"} ,120);
          return false;
     });

     $(window).click(function(){
          if($(".mainEmail").val() == "") 
          $(".email_text").animate({top : 25, "font-size" : "16px"} ,120);
     })

})