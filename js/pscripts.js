$(document).ready(function(){var windowWidth=$(window).width()
if(windowWidth<=768){$('.pict').addClass('lookMore');$('.lookMore').removeClass('pict');}else{$('.lookMore').addClass('pict');$('.pict').removeClass('lookMore');}$(window).resize(function(){var windowWidth=$(window).width()
if(windowWidth<=768){$('.pict').addClass('lookMore');$('.lookMore').removeClass('pict');}else{$('.lookMore').addClass('pict');$('.pict').removeClass('lookMore');}});});$(document).ready(function(){$('#f-lookMore').click(function(event){$('#f-content').toggleClass('mobileDarkBg');})
$('#s-lookMore').click(function(event){$('#s-content').toggleClass('mobileDarkBg');})
$('#t-lookMore').click(function(event){$('#t-content').toggleClass('mobileDarkBg');})
$('#four-lookMore').click(function(event){$('#four-content').toggleClass('mobileDarkBg');})
$('#fif-lookMore').click(function(event){$('#fif-content').toggleClass('mobileDarkBg');})
$('#six-lookMore').click(function(event){$('#six-content').toggleClass('mobileDarkBg');})});
$(document).click(function(event){if($(event.target).closest(".lookMore").length)return;$('.dark').removeClass('mobileDarkBg');indexClick=0;event.stopPropagation();});
$(window).scroll(function(){var the_top=$(document).scrollTop();if(the_top>90){$('#menu').addClass('modMenuHeight');}else{$('#menu').removeClass('modMenuHeight');}});
var join=$(".mobile-menu-block"),
joinLink=$(".menu_Button"),
indexClick=0;
$(function(){joinLink.click(function(n){if(0===indexClick){join.addClass("show");join.removeClass("hide");indexClick=1;$("#nav-icon4").removeClass("mobile-menu");$("#nav-icon4").addClass("open");$(".smartphoneMenu").addClass("open-menu");}else{join.addClass("hide");join.removeClass("show");indexClick=0;$("#nav-icon4").addClass("mobile-menu");$("#nav-icon4").removeClass("open");$(".smartphoneMenu").removeClass("open-menu");}n.stopPropagation()});$('.menuItem a').click(function(n){setTimeout(function(){join.addClass("hide");join.removeClass("show");indexClick=0;$("#nav-icon4").addClass("mobile-menu");$("#nav-icon4").removeClass("open");$(".smartphoneMenu").removeClass("open-menu");},1000);});});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-96020876-1','auto');ga('send','pageview');$(document).scroll(function(){var dHeight=$(this).height();var opacityCalc=$(this).scrollTop()/dHeight*4;if(opacityCalc>0.9){var opacityCalc=0.9;}else if(opacityCalc<=0.5){var opacityCalc=0.5;}if(dHeight>=$(this).scrollTop()){$('header').css('background','rgba(0,0,0,'+opacityCalc+')');}return;});$(document).scroll(function(){var headHeight=$('#hei').height();var menuHeight=$('#menu').height();var changeBgcolorHeight=+headHeight-+menuHeight;if($(this).scrollTop()>=changeBgcolorHeight){$('.menu').css('background','#416d8f');$('.menu').addClass('shadow');}else{$('.menu').css('background','none');$('.menu').removeClass('shadow');}});$(document).ready(function(){$(".pageNavigation").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),navHeight=76;scroll_el=$(this).attr('href');if($(scroll_el).length!=0){$('html, body').animate({scrollTop:$(scroll_el).offset().top-+navHeight},1000)}return false})});var $animation_elements=$('.skill');var $window=$(window);function check_if_in_view(){var window_height=$window.height(),window_top_position=$window.scrollTop(),window_bottom_position=(window_top_position+window_height);$.each($animation_elements,function(){var $element=$(this),element_height=$element.outerHeight(),element_top_position=$element.offset().top,element_bottom_position=(element_top_position+element_height);if((element_bottom_position>=window_top_position)&&(element_top_position<=window_bottom_position)){$('.t').addClass('start');$('.t').removeClass('text');$('.t').removeClass('end');$('.circle').addClass('circleAimation');$element.removeClass('anim-rev');}else{$('.t').addClass('end');$('.t').removeClass('text');$('.t').removeClass('start');$('.circle').removeClass('circleAimation');$element.removeClass('anim');$element.addClass('anim-rev');}})}$window.on('scroll resize',check_if_in_view);$window.trigger('scroll');
$('.owl-carousel').owlCarousel({loop:true, margin:10, nav:true, responsive:{ 0:{ items:1 }, 600:{ items:1 }, 1000:{ items:1 } } });
$(document).ready(function(){var owlWidth = $('.owl-carousel').width();
$('.slideWidth').width(owlWidth)});
$(window).resize(function(){var owlWidth = $('.owl-carousel').width();
$('.slideWidth').width(owlWidth)});
$(document).ready(function() {
    $(".menuItem").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            navHeight = $('.menu').outerHeight();
        scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top - +navHeight
            }, 1000)
        }
        return false
    })
});