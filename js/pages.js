	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-90
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
	});

	$(window).load(function() {
		var navPosition = $('#project-content-nav').offset().top-50;
		$(window).on('scroll', function() {
			if($('body').scrollTop() > navPosition) {                
				$('#project-content-nav').css({
					position: 'fixed',
					top: 50
				});
			} else {
				$('#project-content-nav').css({
					position: 'static'
				});
			}
		});        
	});