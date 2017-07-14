$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});









// $('#tp25').animate({ num: 25000 - 35/* - начало */ }, {
//     duration: 2500,
//     step: function (num){
//         this.innerHTML = (num + 35).toFixed(0) + 'м<sup>2</sup>'
//     }
// });
// $('#nr7').animate({ num: 7 - 1}, {
//     duration: 2500,
//     step: function (num){
//         this.innerHTML = (num + 1).toFixed(0) + 'лет'    }
// });


// $('#gop').animate({ num: 180000 - 135/* - начало */ }, {
//     duration: 2500,
//     step: function (num){
//         this.innerHTML = (num + 135).toFixed(0) + 'м<sup>3</sup>'
//     }
// });


// $(window).scroll(function() { 
//   var hT = $('#test').offset().top, 
//   hH = $('#test').outerHeight(), 
//   wH = $(window).height(), 
//   wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
// }

$(document).ready(function() {
  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });
$(window).on('scroll', function() {
 var hT = $('#test').offset().top;
       hH = $('#test').outerHeight();
       wH = $(window).height()*1.5;
       wS = $(this).scrollTop();
       if (wS > (hT+hH-wH)  || (hT > wS) && (wS+wH > hT+hH)){
$('.elips1 span').animate({ num: 25000 - 35/* - начало */ }, {  
    duration: 2100,
    step: function (num){
        this.innerHTML = (num + 35).toFixed(0) + 'м<sup>2</sup>'}
});
$('.elips2 span').animate({ num: 7 - 1}, {
    duration: 2300,
    step: function (num){
        this.innerHTML = (num + 1).toFixed(0) + "<label>лет</label>"    }
});


$('.elips3 span').animate({ num: 180000 - 135/* - начало */ }, {
    duration: 2100,
    step: function (num){
        this.innerHTML = (num + 135).toFixed(0) + 'м<sup>3</sup>'
    }
});
   }
});
});

// $(document).ready(function() {
//   $(".fancybox").fancybox({
//     openEffect  : 'none',
//     closeEffect : 'none'
//   });

// $(window).scroll(function () {
//     if (isScrolledIntoView($('#test')))
//     {
// $('.elips1 span').animate({ num: 25000 - 35/* - начало */ }, {  
//     duration: 2500,
//     step: function (num){
//         this.innerHTML = (num + 35).toFixed(0) + 'м<sup>2</sup>'}
// });
// $('.elips2 span').animate({ num: 7 - 1}, {
//     duration: 2500,
//     step: function (num){
//         this.innerHTML = (num + 1).toFixed(0) + "лет"    }
// });


// $('.elips3 span').animate({ num: 180000 - 135/* - начало */ }, {
//     duration: 2500,
//     step: function (num){
//         this.innerHTML = (num + 135).toFixed(0) 
//     }
// });
//    }
//     });
// });