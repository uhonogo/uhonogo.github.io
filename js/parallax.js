$(document).ready(function(argument) {
	$(window).scroll(function () {
		var lr = $(this).scrollTop();

		// $(".parallaxImage").css({
		// 	transform : "translateY(-"+lr/40 +'%)',
		// 	// '-webkit-transform:' "translateY(-"+lr/40 +'%)',
  //  //    		'-ms-transform:' "translateY(-"+lr/40 +'%)'
		// });
		// $(".parallaxImage").css("-webkit-transform": "translateY(-"+lr/40 +"%)");
		$(".parallaxImage").css({
			transform: 'translateY(-'+lr/40 +'%)',
			MozTransform: 'translateY(-'+lr/40 +'%)',
			WebkitTransform: 'translateY(-'+lr/40 +'%)',
			msTransform: 'translateY(-'+lr/40 +'%)'
		})
	})
});