$(document).ready(function(argument) {
	$(window).scroll(function () {
		var lr = $(this).scrollTop();

		$(".parallaxImage").css({
			transform : "translateY(-"+lr/100 +'%)'
		});
	})
});