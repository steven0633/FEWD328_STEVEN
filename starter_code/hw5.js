
 $(document).ready(function(){
 	
 	/////////////* Prevent links *////////////////////
 	$("a").click(function(event){
 	    event.preventDefault();
	});
 
 	////////////////* Read more */////////////////
 	$(".readmore").click(function(){
         $("#show-this-on-click").slideDown();
         $(".readless").show();
         $(".readmore").hide();
         $("<br>").insertBefore("p#show-this-on-click"); 
     });
 
 	//////////////////* Read Less *///////////////////
 	$(".readless").click(function(){
         $(".readless").hide();
         $(".readmore").slideUp(300).fadeIn(600);
         $("#show-this-on-click").slideUp();
         $(".post > br").remove(); 
     });
 
 		
 
 	/////////////////////* Sidebar *///////////////
 	$(".learnmore").click(function(){
 		$("span.hide").slideDown();
 		$(".learnmore").hide();
 		$("<br>").insertBefore("span.hide");
 	});

 	