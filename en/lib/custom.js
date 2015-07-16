$(document).ready(function(){
	
	//--------------------------------- Tabs section setup  --------------------------------//
	
		$('#wrapper').easytabs({
    	animate			: true,
    	updateHash		: false,
    	transitionIn	:'slideDown',
    	transitionOut	:'slideUp',
    	animationSpeed	:800,
		tabActiveClass	:'active',
		tabs            :' #mainNav > ul > li',
		transitionInEasing: 'easeOutExpo',
	  	transitionOutEasing: 'easeInOutExpo'
    
    });
	
//--------------------------------- End tabs section setup --------------------------------//
	

//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//
	
	$('.portfolio li').hover( function(){ 
		$(this).children('img').animate({ opacity: 0.55 }, 'fast');
	}, function(){ 
		$(this).children('img').animate({ opacity: 1 }, 'slow'); 
	}); 
	
//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//
	
	
//--------------------------------- Initilaizing fancybox for the clicked elements of the portfolio --------------------------------//
	
	$('.portfolio a.folio').fancybox({
					'overlayShow'	: true,
					'opacity'		: true,
					'transitionIn'	: 'elastic',
					'transitionOut'	: 'none',
					'overlayOpacity'	:   0.8
				});
	
//--------------------------------- End initilaizing fancybox for the clicked elements of the portfolio  --------------------------------//
	
	
//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//
	var $portfolioClone = $('.portfolio').clone();
	
	$('.filter a').click(function(e){
		$('.filter li').removeClass('current');	
		var $filterClass = $(this).parent().attr('class');
		if ( $filterClass == 'all' ) {
			var $filteredPortfolio = $portfolioClone.find('li');
		} else {
			var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
		}
		$('.portfolio').quicksand( $filteredPortfolio, { 
			duration: 800,
			easing: 'easeInOutQuad' 
		}, function(){
			$('.portfolio li').hover( function(){ 
				$(this).children('img').animate({ opacity: 0.55 }, 'fast');
			}, function(){ 
				$(this).children('img').animate({ opacity: 1 }, 'slow'); 
			});
			 
//--------------------------------- Reinitilaizing fancybox for the new cloned elements of the portfolio --------------------------------//
			
			$('.portfolio a.folio').fancybox({
							'overlayShow'	: true,
							'opacity'		: true,
							'transitionIn'	: 'elastic',
							'transitionOut'	: 'none',
							'overlayOpacity'	:   0.8
						});
			
//--------------------------------- End reinitilaizing fancybox for the new cloned elements of the portfolio ----------------------------//
			
		});


		$(this).parent().addClass('current');
		e.preventDefault();
	});
	
//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//
	



});
