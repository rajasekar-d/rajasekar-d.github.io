$(function(){
	// Smooth Scroll
	$('a[href^="#"]').click(function(e){
		var target = $(this).attr('href');
		$('html,body').animate({ scrollTop: $(target).offset().top },1000);
		e.preventDefault();
	});
	
	// Skill
	var skillinitialize = true;
	var skill = new WOW({
			boxClass: 'skill',
			offset: 100,
			callback:  function(box) {
				if(skillinitialize){
					$('.skill').circleProgress().on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('span').text(String(stepValue.toFixed(2)).substr(2) + '%');
					});
				}
				skillinitialize = false;
			}
		}
	);
	skill.init();
	
	// Scroll Animate
	wow = new WOW({ animateClass: 'animated', offset: 100 });
    wow.init();
	
	//Testimonial Slider
	$('.testimonials').unslider({
		autoplay : true,
		arrows: false,
		speed: 1000,
		delay: 5000
	});
	
	// Viewport polyfill
	window.viewportUnitsBuggyfill.init();
	
});