
//  Sticky Menu
$(window).scroll(function(){
var sticky = $('.sticky'),
scroll = $(window).scrollTop();
if (scroll >= 200) sticky.addClass('fixed');
else sticky.removeClass('fixed');
});
//Item Slider
$(document).ready(function() {
$('.slide-items').owlCarousel({
items: 6,
responsive:{
0:{items:1},
450:{items:2},
768:{items:3},
1024:{items:4},
1400:{items:5},
1600:{items:6},
},
lazyLoad: false,
dots: false,
loop: true,
margin:10,
nav: true,
navClass         : ["owl-single-item-nav left carousel-control","owl-single-item-nav right carousel-control"],
navContainerClass: "",
navText: ["<i class=\"owl-single-item-control fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"owl-single-item-control fa fa-chevron-right\" aria-hidden=\"true\"></i>"],
onTranslated: function(event)
{
  var target = $(event.currentTarget);
  var owlItem = $(target.find(".owl-item.active"));
  owlItem.find(".img-fluid.lazy").show().lazyload({threshold : 100});
}
});
$('.brand-slider').owlCarousel({
items: 8,
responsive:{
0:{items:1},
450:{items:2},
768:{items:4},
1024:{items:5},
1400:{items:6},
1600:{items:8},
},
dots:false,
lazyLoad: true,
loop: true,
margin:10,
nav: true,
navClass: ["owl-single-item-nav left carousel-control","owl-single-item-nav right carousel-control"],
navContainerClass: "",
navText: ["<i class=\"owl-single-item-control fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"owl-single-item-control fa fa-chevron-right\" aria-hidden=\"true\"></i>"],
});
//  Accordion
  if ($('.accordion')[0]) {
    $('.accordion-title').on('click', function() {
      if ($(window).width() < 768) {$(this).next().toggle().prev().toggleClass('actives');return false;};
    });
  }
//  FilterAccordion
  if ($('.FilterAccordion')[0]) {
    $('.FilterTitle').on('click', function() {
      $(this).next().toggle().prev().toggleClass('actives');return false;
    });
  }
//  Menu
$('#mobilemenubutton').bind('click', function() {
var hoverClass  = 'hover' ;
var clickedIcon = $(this);
var openMenu    = $(this).attr('rel');
var openMenuID  = $(this).attr('id');
var otherMenu   = $('.nav:not([rel='+openMenu+'])').attr('rel');
var otherIcon   = $('.nav').not('#'+openMenuID);
if ( $('div#'+otherMenu).is(':visible') ) {$(otherIcon).removeClass(hoverClass);$('div#'+otherMenu).stop().slideUp('medium');}
if( $(clickedIcon).hasClass(hoverClass)){$('div#'+openMenu).stop().slideUp('medium');$(clickedIcon).removeClass(hoverClass);}
else {$('div#'+openMenu).stop().slideDown('medium');$(clickedIcon).addClass(hoverClass);}
});
$('#mobilefilterbutton').bind('click', function() {
var hoverClass  = 'hover' ;
var clickedIcon = $(this);
var openMenu    = $(this).attr('rel');
var openMenuID  = $(this).attr('id');
var otherMenu   = $('.nav:not([rel='+openMenu+'])').attr('rel');
var otherIcon   = $('.nav').not('#'+openMenuID);
if ( $('div#'+otherMenu).is(':visible') ) {$(otherIcon).removeClass(hoverClass);$('div#'+otherMenu).stop().slideUp('medium');}
if( $(clickedIcon).hasClass(hoverClass)){$('div#'+openMenu).stop().slideUp('medium');$(clickedIcon).removeClass(hoverClass);}
else {$('div#'+openMenu).stop().slideDown('medium');$(clickedIcon).addClass(hoverClass);}
});

});
