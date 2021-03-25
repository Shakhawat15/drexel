(function ($) {
"use strict";
// Mobile Menu:
  jQuery('#menu-btn').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "768"
  });

// carousel:
$('.carousel').carousel({
  interval: 3000
})
// Product:
$('.product-active').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:2
        },
        768:{
          items:3
        },
        992:{
            items:4
        },
        1200:{
            items:4
        }
    }
})
// Upsell Product:
$('.upsell-active').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:2
        },
        768:{
          items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})
// Brand Section:
        $('.brand-active').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          navText:['Back','Next'],
          responsive:{
            0:{
              items:2
            },
            768:{
              items:4
            },
            992:{
              items:5
            },
            1200:{
              items:6
            }
          }
        })
// Wow Activation:
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

// Scroll Up:
$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

/* Shop Page */
//collapse Icon:
// Add minus icon for collapse element which is open by default
      $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
      });

// Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });
// Select:
  $('#select').niceSelect();

// Price Range
$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 50, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );

})(jQuery);
