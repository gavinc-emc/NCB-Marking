jQuery(document).ready(function() {

	/*******************************************
	 * HELPER FUNCTIONS *
	 *******************************************/

	/*
	 * Image lazy loading
	 * Further reading: https://www.appelsiini.net/projects/lazyload
	 * Example image tag:  <img class="lazy" data-original="img/example.jpg" width="640" height="480">
	 * Uncomment out the code below and in the index.php file to enable lazyloading
	 */

	// jQuery("img.lazy").lazyload({
	//     threshold : 200
	// });

	/*
	 * Check alt tags aren't empty for images
	 * For development use only
	 */

	// jQuery('img').each(function() {
	// 	console.log(jQuery(this).attr('alt'));
	// });

	/*******************************************
	 * RESPONSIVE NAV *
	 *******************************************/

	jQuery('.nav-btn').on('click', function() {
		jQuery('html').addClass('js-nav');
	});

	jQuery('.close-btn, .js-nav #innerwrap').on('click', function() {
		jQuery('html').removeClass('js-nav');
	});

    /*******************************************
     * SEARCH POPUP *
     *******************************************/

    //jQuery('#search-popup').hide();

    // check for search click
    jQuery('#search-header').on('click', function() {
        jQuery('#search-popup').addClass('active');
        jQuery('#mod-finder-searchword138').focus();
    });
    // close button
    jQuery('#search-popup .close').on('click', function() {
        jQuery('#search-popup').removeClass('active');
    });

    /*******************************************
     * SEARCH OUR PRODUCTS BY... *
     *******************************************/

     if (jQuery(".search-carousel").length > 0) {
        // target all carousel
    	var all_carousels = jQuery('.search-carousel');
        // target all buttons (industry/type/function)
        var all_buttons   = jQuery('.home-search-products li')
        // on a page load, run initial setup
        jQuery(window).load(function () {
        	// hide all carousel first
            all_carousels.delay(2000).hide();
            // deselect all buttons
        	all_buttons.removeClass('active');
        	// show the default
        	jQuery('li#industry').addClass('active');
        	jQuery('.search-carousel.industry').show();
        });
        // show industry slider on click
    	jQuery('#industry').click(function(e){
    		all_carousels.hide();
    		all_buttons.removeClass('active');
    		this.addClass('active');
    		jQuery('.search-carousel.industry').show();
    	});
        // show type slider on click
    	jQuery('#type').click(function(e){
    		all_carousels.hide();
    		all_buttons.removeClass('active');
    		this.addClass('active');
    		jQuery('.search-carousel.type').show();
    	});
        // show function slider on click
    	jQuery('#function').click(function(e){
    		all_carousels.hide();
    		all_buttons.removeClass('active');
    		this.addClass('active');
    		jQuery('.search-carousel.function').show();
    	});
    	// owl carousel configuration for homepage sliders
    	jQuery('.latestnews-items').owlCarousel({
    	    loop: false,
    	    autoPlay: false,
    		autoplayTimeout: 800,
    		autoplayHoverPause: true,
    	    margin: 39,
    	    nav: true,
    	    dots: true,
    	    responsive:{
    	        0:{
    	            items:1,
    	            slideBy:1
    	        },
    	        800:{
    	            items:2,
    	            slideBy:2
    	        },
    	        1200:{
    	            items:3,
    	            slideBy:3
    	        }
    	    }
    	})
    }

    // Products you have viewed recently... (contact page)
    if (jQuery(".recentlyhit").length > 0) {
        jQuery('.recentlyhit').owlCarousel({
            loop: false,
            autoPlay: false,
            autoplayTimeout: 800,
            autoplayHoverPause: true,
            margin: 30,
            nav: true,
            dots: true,
            responsive:{
                0:{
                    items:1,
                    slideBy:1
                },
                800:{
                    items:2,
                    slideBy:2
                },
                1200:{
                    items:3,
                    slideBy:3
                }
            }
        })
    }

    /*******************************************
     * Product Tabs *
     *******************************************/

    // target all buttons (industry/type/function)
    var all_tabs   = jQuery('.tabs li');
    var all_panels = jQuery('.panel');
    // remove all
    all_tabs.removeClass('active');
    all_panels.hide();
    // show defaults
    jQuery('.tabs #descr').addClass('active');
    jQuery('.descr').fadeIn();
    // show descr panel on tab click
    jQuery('.tabs #descr').click(function(e){
        all_tabs.removeClass('active');
        all_panels.hide();
        jQuery(this).addClass('active');
        jQuery('.panel.descr').fadeIn();
    });
    // show technical panel on tab click
    jQuery('.tabs #technical').click(function(e){
        all_tabs.removeClass('active');
        all_panels.hide();
        jQuery(this).addClass('active');
        jQuery('.panel.technical').fadeIn();
    });
    // show tables panel on tab click
    jQuery('.tabs #tables').click(function(e){
        all_tabs.removeClass('active');
        all_panels.hide();
        jQuery(this).addClass('active');
        jQuery('.panel.tables').fadeIn();
    });

});
