
var howScreen = 1, howRotate,landingScreen = 2, SecondlandingScreen = 3;

function setHowScreen(e, t) {
    window.clearTimeout(howRotate), $("#how-it-works .screens").addClass("s" + e).removeClass("s" + howScreen),
    howScreen = e, $("#how-it-works .step").removeClass("active"),
    $("#how-it-works .step").eq(howScreen - 1).addClass("active");
    var n = 3e3 ;
    howRotate = window.setTimeout(rotateHowScreen, n)
}

function rotateHowScreen() {
    var e = howScreen + 1;
    e > 3 && (e = 1), setHowScreen(e, !0)
}

function updateLandingScreen() {
     $("#landing .screen .old").fadeOut( 800, function() {   
  });
    $("#landing .screen .old").removeClass("old");
    var e = $("#landing .screen .active").addClass("old").removeClass("active");
    
    landingScreen += 1, landingScreen > 5 && (landingScreen = 1);
    var t = $("#landing .screen-" + landingScreen);
     $("#landing .screen-" + landingScreen).fadeIn( 400, function() {   
  });
    t.css({
        left: "100%"
    }), t.addClass("active"), window.setTimeout(function() {
        e.css({
            left: "-100%"
        }), t.css({
            left: 0
        })
    }, 20), $("#landing .carousel a").removeClass("active"),
     $("#landing .carousel a").eq(landingScreen - 1).addClass("active")
   
}

function updateSecondScreen(){
     $(".screen .old").fadeOut( "slow", function() {   
  });
    $(".screen .old").removeClass("old");
    var e = $(".screen .active").addClass("old").removeClass("active");
    
    SecondlandingScreen += 1, SecondlandingScreen > 3 && (SecondlandingScreen = 1);
    var t = $(".sscreen-" + SecondlandingScreen);
     $(".sscreen-" + SecondlandingScreen).fadeIn( 200, function() {   
  });
    t.css({
        left: "100%"
    }), t.addClass("active"), window.setTimeout(function() {
        e.css({
            left: "-100%"
        }), t.css({
            left: 0
        })
    }, 20), $(".carousel2 a").removeClass("active"),
     $(".carousel2 a").eq(SecondlandingScreen - 1).addClass("active")
}

function rotateScreens(){
     var e = $("#landing .screen .active");
    e.fadeIn( 3000, function() {
    $("#landing .screen .old").removeClass("old");
    e.addClass("old").removeClass("active");
    landingScreen += 1, landingScreen > 5 && (landingScreen = 1);
  });

}
  $(document).ready(function() {  
    rotateHowScreen();
    window.setInterval(updateLandingScreen, 3e3);
    window.setInterval(updateSecondScreen,3e3);
   // rotateScreens();
     //  $("html").niceScroll({styler:"fb",cursorcolor:"#000"});
    });



$(document).ready(function(){
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation in speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
                    //scrollTarget: false, // Set a custom target element for scrolling to the top
            scrollText: '<i class="fa fa-angle-up" ></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });


 $('.snipebills.Retailers').click(function(){
    $('.snipebillsForRetailers').removeClass('hidden');
    $('.snipebillsForCustomers').addClass('hidden');
     $('.snipebills.Retailers').addClass('selected');
     $('.snipebills.You').removeClass('selected');
  });

  $('.snipebills.You').click(function(){   
    $('.snipebills.Retailers').removeClass('selected');
    $('.snipebillsForRetailers').addClass('hidden');
    $('.snipebillsForCustomers').removeClass('hidden');
    $('.snipebills.You').addClass('selected');
  });
$('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });

});
