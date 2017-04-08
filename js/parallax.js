$(document).ready(function(argument) {
	$(window).scroll(function () {
		var lr = $(this).scrollTop();
		$(".parallaxImage").css({
			transform: 'translateY(-'+lr/40 +'%)',
			MozTransform: 'translateY(-'+lr/40 +'%)',
			WebkitTransform: 'translateY(-'+lr/40 +'%)',
			msTransform: 'translateY(-'+lr/40 +'%)'
		})
	})
});