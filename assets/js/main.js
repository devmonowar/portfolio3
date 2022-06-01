
jQuery(document).ready(function($){
	
	//		start section active
            var topMenu = jQuery("#mainmenu"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = jQuery(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

            // so we can get a fancy scroll animation
            menuItems.click(function(e){
              var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
              jQuery('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 600);
              e.preventDefault();
            });

            // Bind to scroll
            jQuery(window).scroll(function(){
               // Get container scroll position
               var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";               

               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }

            });
	//		end section active
			
		
	
	
	
	
	
	
	
	
	
	
	//start counter number
	$('.count').counterUp({
		delay: 10,
		time: 2000
	});
	//end counter number
	
		jQuery(".projects-title ul li").on('click', function() {
            $(".projects-title ul li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
               filter: selector 
            });
        });
		
// start water animation
	
		$('.hero-area').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
			
	});
		
		// Automatic drops
		setInterval(function() {
			var $el = $('.hero-area');
			var x = Math.random() * $el.outerWidth();
			var y = Math.random() * $el.outerHeight();
			var dropRadius = 20;
			var strength = 0.4 + Math.random() * 0.4;

			$el.ripples('drop', x, y, dropRadius, strength);
		}, 600);
	
	
//end water animation
		


	//		start fixed-menu
$(window).scroll(function(){
    if ($(window).scrollTop() >= 500) {
        $('nav').addClass('fixed-menu');
    }
    else {
        $('nav').removeClass('fixed-menu');
    }
});

	//		end fixed-menu
		/*=========================================================================
	Testimonial Carousel
=========================================================================*/ 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    nav:false,
    autoplayHoverPause:true,
	responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            loop:true,
        }
    }
});
  
	
});	

 $(window).scroll(function() {
    var hT = $('#skill-bar-wrapper').offset().top,
        hH = $('#skill-bar-wrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-1.4*wH)){
        jQuery(document).ready(function(){
            jQuery('.skillbar-container').each(function(){
                jQuery(this).find('.skills').animate({
                    width:jQuery(this).attr('data-percent')
                }, 3000);
            });
        });
    }
 });
	

	
