
//navbar mobile
     
        if (window.matchMedia('(max-width: 1340px)').matches){


   $(".formenu").click(function(){
    $('.forborder ul').slideDown('fast',function(){
      $('.mynavbar ul').addClass('responsive');
      $('.mynavbar').addClass('change');
    });

});
   
}

$(document).click(function(event) { 
    if(!$(event.target).closest('.responsive').length) {
        if($('.responsive').is(":visible")) {
           $('.mynavbar ul').removeClass('responsive');
            $('.mynavbar').removeClass('change');
            $('.forborder ul').slideUp('fast');
        }
    }        
});





 //news slide
 $('.news').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
  	},
  	{
       	breakpoint: 483,
      	settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },]
});


 


//language 
$(".language").add(".language a").mouseenter(function(e) {
    $(".Geo").css({
    	"display":"block",
    	"position":"absolute"
    })
    $(".language").css({
    	
    	"position":"relative"
    })
    });
  $(".language").mouseleave(function() {

        $(".Geo").css({
    	"display":"none",
    })
    });
if (window.matchMedia('(min-width: 768px)').matches){
$(".time_box_left").add(".time_box_right").mouseenter(function(e) {
    $(this).find(".hoverbox").css({
      "opacity":"1",
      
    })
    
    });
  $(".time_box_left").add(".time_box_right").mouseleave(function() {

        $(".hoverbox").css({
      "opacity":"0",
    })
    });
}



/*social dots ...*/

if (window.matchMedia('(max-width: 992px) and (min-width:768px)').matches){
$('#social ul').find('li').each(function(){
        var readmore = $(this).html();
        var lessmore=readmore.substr(0,112);
        if(readmore.length>115){
        $(this).find('a').remove();
        $(this).html(lessmore+'...');
      }
    });
}
if (window.matchMedia('(max-width: 1060px) and (min-width:992px)').matches){
$('#social ul').find('li').each(function(){
        var readmore = $(this).html();
        var lessmore=readmore.substr(0,115);
        if(readmore.length>115){
        $(this).find('a').remove();
        $(this).html(lessmore+'...');
      }
    });
}

$( ".time_minbox_left" ).append( "<div class='hoverbox leftplus'>+</div>");
$( ".time_minbox_right" ).append( "<div class='hoverbox rightplus'>+</div>");



/////////////////////////////////////////////////////////////////
$( ".box" ).add(".searchbox").click(function() {
  
  $(".box").addClass('movebox').addClass('transition1s');
  $(".searchbox").addClass('movesearch');
  $(".enter").addClass('entershow');
  /*$(".language").addClass('movelang');*/


});
$('.enter').click(function() {
   $('.box').removeClass('movebox');
$(".searchbox").removeClass('movesearch');
$(".enter").removeClass('entershow');
  

});
$(document).click(function(event) { 
    if(!$(event.target).closest('.all').length) {
        if($('.all').is(":visible")) {
           $('.box').removeClass('movebox');
          $(".searchbox").removeClass('movesearch');
          $(".enter").removeClass('entershow');
        }
    }        
});

$('.box').focus(function (event) {
    $('.searchbox').focus();
});
////////////////////////////////////////////////////////////////
$('.category').slick({
  infinite: false,
  slidesToShow: 5,
  arrows:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    /*{
        breakpoint: 483,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },*/]
});





///category subs/////////

$(document).ready(function(){
  responsive_menu = $('#listt');

  
  $('.list').add('.plus').on('click', function(e) {
    e.preventDefault();
    
    $(".list span").addClass("opacity02");
    $(".plus span").addClass("rotate");
    responsive_menu.slideToggle('200');
    
  });
  $(document).click(function(event) { 
    if(!$(event.target).closest('.list').length) {
        if($('.list').is(":visible")) {
           $(".list span").removeClass("opacity02");
            $(".plus span").removeClass("rotate");
            responsive_menu.slideUp('200');
        }
    }        
});

});
////////////////////
   

$(document).ready(function() {
  
 if (window.matchMedia('(max-width: 1080px)').matches){
         var readmore=$(".review").html();
       var lessmore=readmore.substr(0,250);
        $(".review").html(lessmore).append("...");
      }

  if (window.matchMedia('(max-width: 992px)').matches){
         var readmore=$(".review").html();
       var lessmore=readmore.substr(0,200);
        $(".review").html(lessmore).append("...");
      }
});
/*$(window).ready(function(){
   var width = $(window).width();
   $('.slide').css({'width':width+'px', 'height':width/3+'px'});
 
});*/
///slide start///////////////////////////////////////////
$(document).ready(function() {
    $('.secondslide').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.foranimate:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.secondslide').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = $('div.foranimate[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);    
    });
    $('.secondslide').slick({
       autoplay: true,
       autoplaySpeed: 4000,
       fade: true,
       dots: true,
       arrows: false,
       pauseOnHover:false,
       pauseOnFocus:false,
       responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    },]
    });
    
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});
////////////////////////////////////////

$(function () {
    var dropdown = $("#menubox ul.menu ol > .dropdown");

    $("#menubox ul.menu ol").on({
        mouseenter: function () {
            if ($(window).width() > 1250)
                dropdown.fadeIn();
        },
        mouseleave: function () {
            if ($(window).width() > 1250)
                dropdown.fadeOut();
        }
    });

    $("#menubox ul.menu ol li a").on({
        mouseenter: function () {
            if ($(window).width() > 1250) {
                dropdown.html("");
                var $this = $(this).closest("li");
                var itemDropdown = $this.find(".dropdown");
                var dropsechtml = itemDropdown.html();
                dropsechtml = $(dropsechtml).css("display", "flex");
                dropdown.html(dropsechtml);
            }
        }
    });
});
