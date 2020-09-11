$(document).ready(function(){
   //Sticky Menu
   $('.js--servicec-section').waypoint(function(direction){
      if (direction == "down") {
         $("nav").addClass("sticky");
      } else {
         $("nav").removeClass("sticky");
      }
   });
   //Active link
   $("nav ul li a").click(function(){
      $("nav ul li a").removeClass("active");
      $(this).addClass("active");
   })

   $("nav a img.logo").click(function(){
      $("nav ul li a").removeClass("active");
      $("nav ul li::fitst-child a").addClass("active");
      
   })


   //Mixit up
   var mixer = mixitup('.gallery-container');
  });

  function OpenNav(){
     document.getElementById("myNav").style.width = "100%";
  }

  function CloseNav(){
   document.getElementById("myNav").style.width = "0%";
}

