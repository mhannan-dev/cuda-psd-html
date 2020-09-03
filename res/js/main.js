$(document).ready(function(){
   //Sticky Menu
   $('.js--servicec-section').waypoint(function(direction){
      if (direction == "down") {
         $("nav").addClass("sticky");
      } else {
         $("nav").removeClass("sticky");
      }
   });
   //Mixit up
   var mixer = mixitup('.gallery-container');
  });

