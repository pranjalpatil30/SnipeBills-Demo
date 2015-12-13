(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
        $('.heading-about').css("top","-100px");
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			if($( document ).width()>768){
			 $("#logo").css("background-color","transparent").css("top","0px").css("height","65px");
                $("navbar1").css("height","65px");
			}
			else{
				 $("#logo").css("background-color","transparent").css("top","15px");
			}		
			
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			if($( document ).width()>768){
			 $("#logo").css("background-color","orange").css("top","20%");
			}
			else{
			  $("#logo").css("background-color","orange");//.css("top","3px");
			}			
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
